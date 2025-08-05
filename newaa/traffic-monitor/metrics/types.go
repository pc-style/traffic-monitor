package metrics

import (
	"sync"
	"time"
)

// Metrics represents the current system metrics
type Metrics struct {
	Timestamp     time.Time `json:"timestamp"`
	BandwidthIn   int64     `json:"bandwidthIn"`
	BandwidthOut  int64     `json:"bandwidthOut"`
	RequestsPerSec float64  `json:"requestsPerSec"`
	ActiveConnections int   `json:"activeConnections"`
	AvgResponseTime  float64 `json:"avgResponseTime"`
}

// HistoryItem represents a point in time metric for history
type HistoryItem struct {
	Timestamp         time.Time `json:"timestamp"`
	BandwidthIn       int64     `json:"bandwidthIn"`
	BandwidthOut      int64     `json:"bandwidthOut"`
	RequestsPerSec    float64   `json:"requestsPerSec"`
	ActiveConnections int       `json:"activeConnections"`
}

// Storage holds metrics history
type Storage struct {
	mu       sync.RWMutex
	history  []HistoryItem
	historySize int
	current  Metrics
	requestCount int64
	lastBytesIn  int64
	lastBytesOut int64
	lastTime     time.Time
}

// NewStorage creates a new metrics storage
func NewStorage(historySize int) *Storage {
	return &Storage{
		history:     make([]HistoryItem, 0, historySize),
		historySize: historySize,
		lastTime:    time.Now(),
	}
}

// AddMetrics adds new metrics to storage
func (s *Storage) AddMetrics(m Metrics) {
	s.mu.Lock()
	defer s.mu.Unlock()

	s.current = m

	// Add to history
	item := HistoryItem{
		Timestamp:         m.Timestamp,
		BandwidthIn:       m.BandwidthIn,
		BandwidthOut:      m.BandwidthOut,
		RequestsPerSec:    m.RequestsPerSec,
		ActiveConnections: m.ActiveConnections,
	}

	// Maintain circular buffer
	if len(s.history) >= s.historySize {
		// Remove oldest item
		s.history = s.history[1:]
	}
	s.history = append(s.history, item)
}

// GetCurrent returns the current metrics
func (s *Storage) GetCurrent() Metrics {
	s.mu.RLock()
	defer s.mu.RUnlock()
	return s.current
}

// GetHistory returns the metrics history
func (s *Storage) GetHistory() []HistoryItem {
	s.mu.RLock()
	defer s.mu.RUnlock()
	// Return a copy to prevent external modification
	history := make([]HistoryItem, len(s.history))
	copy(history, s.history)
	return history
}

// IncrementRequest increments the request counter
func (s *Storage) IncrementRequest(bytesIn, bytesOut int64) {
	s.mu.Lock()
	defer s.mu.Unlock()

	s.requestCount++
	s.lastBytesIn += bytesIn
	s.lastBytesOut += bytesOut
}
