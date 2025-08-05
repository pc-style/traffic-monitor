# Traffic Monitor

A real-time HTTP traffic monitoring tool that tracks requests, bandwidth usage, and provides a web interface for visualization.

## Features

- **Real-time Request Logging**: Logs every HTTP request with method, path, remote address, status code, duration, and bytes in/out
- **Metrics Collection**: Tracks requests per second, bandwidth usage, and active connections
- **Web Interface**: Beautiful dashboard showing current metrics and history
- **REST API**: JSON endpoints for programmatic access to metrics
- **Configurable**: Customizable port, host binding, refresh interval, and history size

## Usage

### Basic Usage
```bash
go run main.go
```

### Command Line Options
```bash
go run main.go -port 8080 -host 0.0.0.0 -refresh 1 -history 300
```

- `-port`: HTTP server port (default: 8080)
- `-host`: HTTP server host to bind to (default: 0.0.0.0 - accepts connections from anywhere)
- `-refresh`: Metrics refresh interval in seconds (default: 1)
- `-history`: Number of data points to retain (default: 300)

## Endpoints

- `/` - Web interface dashboard
- `/api/metrics` - Current metrics as JSON
- `/api/history` - Metrics history as JSON
- `/api/test` - Test endpoint to generate traffic

## Example Output

When requests are made, you'll see logs like:
```
2025/08/05 01:53:51 GET /api/test [::1]:53722 - 200 - 179.167µs - 0 bytes in, 115 bytes out
2025/08/05 01:53:52 Collected metrics: RPS=1.00, In=0 B/s, Out=115 B/s, Requests=1
```

## Architecture

- **main.go**: Application entry point and server setup
- **server/**: HTTP server with request logging middleware
- **metrics/**: Metrics collection and storage
- **config/**: Configuration management
- **web/**: Static web assets (if any)

## Request Tracking

The application uses middleware to track every HTTP request:
- Logs request details (method, path, remote address, status, duration)
- Counts requests and bandwidth usage
- Updates metrics in real-time
- Provides both console logging and web interface

## Web Interface

The web interface shows:
- Current bandwidth in/out
- Requests per second
- Active connections
- Real-time metrics updates
- Auto-refresh functionality
