package server

import (
	"encoding/json"
	"html/template"
	"log"
	"net/http"
	"time"

	"traffic-monitor/config"
	"traffic-monitor/metrics"
)

// Server handles HTTP requests
type Server struct {
	config *config.Config
	store  *metrics.Storage
}

// New creates a new server instance
func New(config *config.Config, store *metrics.Storage) *Server {
	return &Server{
		config: config,
		store:  store,
	}
}

// requestLogger middleware logs requests and updates metrics
func (s *Server) requestLogger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		
		// Create a response writer wrapper to capture response size
		wrapped := &responseWriter{ResponseWriter: w}
		
		// Call the next handler
		next.ServeHTTP(wrapped, r)
		
		// Calculate request/response sizes
		requestSize := r.ContentLength
		if requestSize < 0 {
			requestSize = 0
		}
		
		responseSize := wrapped.written
		
		// Log the request
		duration := time.Since(start)
		log.Printf("%s %s %s - %d - %v - %d bytes in, %d bytes out", 
			r.Method, r.URL.Path, r.RemoteAddr, wrapped.statusCode, duration, requestSize, responseSize)
		
		// Update metrics
		s.store.IncrementRequest(requestSize, responseSize)
	})
}

// responseWriter wraps http.ResponseWriter to capture response size
type responseWriter struct {
	http.ResponseWriter
	written    int64
	statusCode int
}

func (rw *responseWriter) Write(b []byte) (int, error) {
	size, err := rw.ResponseWriter.Write(b)
	rw.written += int64(size)
	return size, err
}

func (rw *responseWriter) WriteHeader(statusCode int) {
	rw.statusCode = statusCode
	rw.ResponseWriter.WriteHeader(statusCode)
}

// Router returns the HTTP request router
func (s *Server) Router() http.Handler {
	mux := http.NewServeMux()
	
	// API endpoints
	mux.HandleFunc("/api/metrics", s.handleMetrics)
	mux.HandleFunc("/api/history", s.handleHistory)
	mux.HandleFunc("/api/test", s.handleTest)
	
	// Static files
	mux.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("web/static/"))))
	
	// Main page
	mux.HandleFunc("/", s.handleIndex)
	
	// Wrap the mux with request logging middleware
	return s.requestLogger(mux)
}

// handleMetrics returns current metrics as JSON
func (s *Server) handleMetrics(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	metrics := s.store.GetCurrent()
	json.NewEncoder(w).Encode(metrics)
}

// handleHistory returns metrics history as JSON
func (s *Server) handleHistory(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	history := s.store.GetHistory()
	json.NewEncoder(w).Encode(history)
}

// handleTest is a test endpoint to generate traffic
func (s *Server) handleTest(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	response := map[string]interface{}{
		"message": "Test endpoint - generating traffic",
		"timestamp": time.Now(),
		"status": "success",
	}
	
	json.NewEncoder(w).Encode(response)
}

// handleIndex serves the main page
func (s *Server) handleIndex(w http.ResponseWriter, r *http.Request) {
	// Simple HTML template for displaying metrics
	tmpl := `
<!DOCTYPE html>
<html>
<head>
    <title>Traffic Monitor</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .metric-card {
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .metric-value {
            font-size: 2em;
            font-weight: bold;
            color: #007acc;
        }
        .metric-label {
            font-size: 0.9em;
            color: #666;
            margin-top: 5px;
        }
        .chart-container {
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        .chart {
            height: 300px;
            width: 100%;
        }
        .controls {
            text-align: center;
            margin-bottom: 20px;
        }
        button {
            background: #007acc;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            margin: 0 10px;
        }
        button:hover {
            background: #005a9e;
        }
        .status {
            text-align: center;
            padding: 10px;
            border-radius: 4px;
            margin-bottom: 20px;
        }
        .status-running {
            background: #d4edda;
            color: #155724;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>_traffic-monitor</h1>
            <div class="status status-running">
                Status: Running
            </div>
        </div>
        
        <div class="controls">
            <button onclick="refreshMetrics()">Refresh Metrics</button>
            <button onclick="startAutoRefresh()">Auto Refresh</button>
            <button onclick="stopAutoRefresh()">Stop Auto Refresh</button>
        </div>
        
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-value" id="bandwidthIn">0 B/s</div>
                <div class="metric-label">Bandwidth In</div>
            </div>
            <div class="metric-card">
                <div class="metric-value" id="bandwidthOut">0 B/s</div>
                <div class="metric-label">Bandwidth Out</div>
            </div>
            <div class="metric-card">
                <div class="metric-value" id="requestsPerSec">0</div>
                <div class="metric-label">Requests Per Second</div>
            </div>
            <div class="metric-card">
                <div class="metric-value" id="activeConnections">0</div>
                <div class="metric-label">Active Connections</div>
            </div>
        </div>
        
        <div class="chart-container">
            <h2>Metrics History</h2>
            <div class="chart" id="metricsChart"></div>
        </div>
    </div>

    <script>
        let autoRefreshInterval;
        
        // Fetch and display current metrics
        function refreshMetrics() {
            fetch('/api/metrics')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('bandwidthIn').textContent = formatBytes(data.bandwidthIn) + '/s';
                    document.getElementById('bandwidthOut').textContent = formatBytes(data.bandwidthOut) + '/s';
                    document.getElementById('requestsPerSec').textContent = data.requestsPerSec.toFixed(2);
                    document.getElementById('activeConnections').textContent = data.activeConnections;
                })
                .catch(error => console.error('Error fetching metrics:', error));
        }
        
        // Format bytes for display
        function formatBytes(bytes) {
            if (bytes === 0) return '0 B';
            const k = 1024;
            const sizes = ['B', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }
        
        // Auto refresh functionality
        function startAutoRefresh() {
            stopAutoRefresh(); // Clear any existing interval
            autoRefreshInterval = setInterval(refreshMetrics, 1000);
        }
        
        function stopAutoRefresh() {
            if (autoRefreshInterval) {
                clearInterval(autoRefreshInterval);
                autoRefreshInterval = null;
            }
        }
        
        // Initial load
        refreshMetrics();
        
        // Refresh every second by default
        startAutoRefresh();
    </script>
</body>
</html>
	`
	
	t, err := template.New("index").Parse(tmpl)
	if err != nil {
		log.Printf("Error parsing template: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}
	
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	t.Execute(w, nil)
}
