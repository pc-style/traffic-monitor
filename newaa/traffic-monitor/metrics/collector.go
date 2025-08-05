package metrics

import (
	"context"
	"log"
	"time"
)

// Collector is responsible for collecting system metrics
type Collector struct {
	store *Storage
}

// NewCollector creates a new metrics collector
func NewCollector(store *Storage) *Collector {
	return &Collector{
		store: store,
	}
}

// Start begins collecting metrics at the specified interval
func (c *Collector) Start(ctx context.Context, interval time.Duration) {
	ticker := time.NewTicker(interval)
	defer ticker.Stop()

	// Initialize last time
	c.store.mu.Lock()
	c.store.lastTime = time.Now()
	c.store.mu.Unlock()

	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			c.collectMetrics()
		}
	}
}

// collectMetrics collects current system metrics
func (c *Collector) collectMetrics() {
	// Get current time
	now := time.Now()
	
	// Get previous time and request count
	c.store.mu.Lock()
	lastTime := c.store.lastTime
	requestCount := c.store.requestCount
	lastBytesIn := c.store.lastBytesIn
	lastBytesOut := c.store.lastBytesOut
	
	// Reset counters
	c.store.requestCount = 0
	c.store.lastBytesIn = 0
	c.store.lastBytesOut = 0
	c.store.lastTime = now
	c.store.mu.Unlock()
	
	// Calculate time delta
	timeDelta := now.Sub(lastTime).Seconds()
	if timeDelta <= 0 {
		timeDelta = 1
	}
	
	// Calculate metrics
	rps := float64(requestCount) / timeDelta
	bandwidthIn := int64(float64(lastBytesIn) / timeDelta)
	bandwidthOut := int64(float64(lastBytesOut) / timeDelta)
	
	// Create metrics object
	metrics := Metrics{
		Timestamp:        now,
		BandwidthIn:      bandwidthIn,
		BandwidthOut:     bandwidthOut,
		RequestsPerSec:   rps,
		ActiveConnections: int(requestCount), // Using request count as proxy
		AvgResponseTime:   10 + float64(requestCount%50), // Mock response time
	}
	
	// Store metrics
	c.store.AddMetrics(metrics)
	
	// Only log if there's actual activity
	if requestCount > 0 || lastBytesIn > 0 || lastBytesOut > 0 {
		log.Printf("Collected metrics: RPS=%.2f, In=%d B/s, Out=%d B/s, Requests=%d", 
			rps, bandwidthIn, bandwidthOut, requestCount)
	} else {
		log.Printf("No activity detected in this interval")
	}
}
