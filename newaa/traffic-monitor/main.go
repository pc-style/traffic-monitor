package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"traffic-monitor/config"
	"traffic-monitor/metrics"
	"traffic-monitor/server"
)

func main() {
	// Parse command line flags
	port := flag.String("port", "8080", "HTTP server port")
	host := flag.String("host", "0.0.0.0", "HTTP server host to bind to")
	refreshInterval := flag.Int("refresh", 1, "Metrics refresh interval in seconds")
	historySize := flag.Int("history", 300, "Number of data points to retain")
	flag.Parse()

	// Create configuration
	cfg := &config.Config{
		Port:            *port,
		Host:            *host,
		RefreshInterval: time.Duration(*refreshInterval) * time.Second,
		HistorySize:     *historySize,
	}

	// Create metrics collector and storage
	store := metrics.NewStorage(cfg.HistorySize)
	collector := metrics.NewCollector(store)

	// Start metrics collection in background
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	go collector.Start(ctx, cfg.RefreshInterval)

	// Create HTTP server
	srv := server.New(cfg, store)

	// Start HTTP server
	httpServer := &http.Server{
		Addr:    cfg.Host + ":" + cfg.Port,
		Handler: srv.Router(),
	}

	// Start server in goroutine
	go func() {
		log.Printf("Starting traffic monitor server on port %s", cfg.Port)
		log.Printf("Metrics collection interval: %v", cfg.RefreshInterval)
		log.Printf("History size: %d data points", cfg.HistorySize)
		log.Printf("Test endpoint available at: http://%s:%s/api/test", cfg.Host, cfg.Port)
		log.Printf("Web interface available at: http://%s:%s/", cfg.Host, cfg.Port)

		if err := httpServer.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Server failed to start: %v", err)
			os.Exit(1)
		}
	}()

	// Wait for interrupt signal to gracefully shutdown the server
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit

	log.Println("Shutting down server...")

	// Cancel context to stop metrics collection
	cancel()

	// Gracefully shutdown the server with a timeout
	ctx, cancel = context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := httpServer.Shutdown(ctx); err != nil {
		log.Fatalf("Server forced to shutdown: %v", err)
	}

	fmt.Println("Server exited")
}
