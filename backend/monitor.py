"""
monitor.py — Tamper Detection
SILENT-STROKE | Defensive Forensic Platform
"""

from logger import check_integrity
from pathlib import Path

LOG_FILE = Path("logs/events.enc")


def verify():
    """Check log file integrity and report."""
    if not LOG_FILE.exists():
        print("[MONITOR] No log file found.")
        return

    if check_integrity():
        print("[MONITOR] ✓ Integrity check passed — logs are untampered.")
    else:
        print("[MONITOR] ✗ TAMPER DETECTED — log file has been modified!")
        print("[MONITOR] Flagging for forensic review.")


if __name__ == "__main__":
    verify()
