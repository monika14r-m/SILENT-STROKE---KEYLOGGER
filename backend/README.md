# SILENT-STROKE — Python Backend

> Defensive endpoint monitoring and forensic analysis platform. Captures encrypted activity logs and generates structured forensic reports for incident investigation.

## Overview

SILENT-STROKE is a Python-based EDR-comparable monitoring tool built for controlled security research environments. It captures endpoint activity across 5 event types, stores all data AES-256 encrypted, detects log tampering, and exports structured PDF forensic reports.

| Module | Description |
|---|---|
| `logger.py` | Captures keystrokes, mouse clicks, active process, system events |
| `encrypt.py` | AES-256 CBC encryption and decryption for all logged data |
| `monitor.py` | SHA-256 integrity verification — detects log tampering |
| `report.py` | Decrypts logs and generates structured PDF forensic reports |
| `main.py` | CLI entry point |

## Event Types Captured

1. Keystrokes — key + active process
2. Mouse clicks — position + button + process
3. Active window / process context
4. Clipboard changes *(roadmap)*
5. System events — session start/end, USB, process spawn

## Installation

**Requires Python 3.9+**

```bash
git clone https://github.com/monika14r-m/SILENT-STROKE---KEYLOGGER.git
cd SILENT-STROKE---KEYLOGGER
pip install -r requirements.txt
```

## Usage

```bash
# Start capturing
python main.py capture

# Generate forensic PDF report
python main.py report

# Verify log integrity
python main.py verify
```

## Security Design

- All events encrypted with AES-256 CBC before writing to disk
- Unique IV per encryption operation — no two ciphertexts are identical
- SHA-256 integrity hash updated after every write
- Tamper detection flags modified logs in the forensic report

## Running Tests

```bash
pytest tests/ -v
```

## Disclaimer

This tool is intended strictly for authorized, consensual monitoring in controlled security research environments. Unauthorized use of endpoint monitoring software is illegal.

## License

MIT License.
