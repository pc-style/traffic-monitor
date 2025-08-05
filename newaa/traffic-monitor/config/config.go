package config

import "time"

// Config holds application configuration
type Config struct {
	Host            string
	Port            string
	RefreshInterval time.Duration
	HistorySize     int
}
