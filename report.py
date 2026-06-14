"""
report.py — Forensic Report Generator
SILENT-STROKE | Defensive Forensic Platform

Decrypts event logs and generates a structured PDF forensic report.
"""

import json
from datetime import datetime
from pathlib import Path
from fpdf import FPDF

from encrypt import decrypt
from monitor import check_integrity

LOG_FILE = Path("logs/events.enc")
REPORT_DIR = Path("reports")
REPORT_DIR.mkdir(exist_ok=True)


def load_events() -> list:
    """Decrypt and parse all logged events."""
    if not LOG_FILE.exists():
        return []

    events = []
    for line in LOG_FILE.read_text().splitlines():
        line = line.strip()
        if line:
            try:
                events.append(json.loads(decrypt(line)))
            except Exception:
                continue
    return events


def generate(output_name: str = None):
    """Generate a PDF forensic report from decrypted logs."""
    events = load_events()
    if not events:
        print("[REPORT] No events found.")
        return

    tampered = not check_integrity()
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_name = output_name or f"forensic_report_{timestamp}.pdf"
    output_path = REPORT_DIR / output_name

    # Count event types
    counts = {}
    for e in events:
        t = e.get("type", "unknown")
        counts[t] = counts.get(t, 0) + 1

    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Helvetica", "B", 16)
    pdf.cell(0, 10, "SILENT-STROKE — Forensic Activity Report", ln=True)

    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 8, f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}", ln=True)
    pdf.cell(0, 8, f"Total Events: {len(events)}", ln=True)

    integrity_status = "TAMPERED — logs may have been modified" if tampered else "VERIFIED — logs are untampered"
    pdf.set_text_color(200, 0, 0) if tampered else pdf.set_text_color(0, 150, 0)
    pdf.cell(0, 8, f"Integrity Status: {integrity_status}", ln=True)
    pdf.set_text_color(0, 0, 0)

    # Summary
    pdf.ln(4)
    pdf.set_font("Helvetica", "B", 12)
    pdf.cell(0, 8, "Event Summary", ln=True)
    pdf.set_font("Helvetica", "", 10)
    for event_type, count in counts.items():
        pdf.cell(0, 7, f"  {event_type}: {count}", ln=True)

    # Event log
    pdf.ln(4)
    pdf.set_font("Helvetica", "B", 12)
    pdf.cell(0, 8, "Event Log", ln=True)
    pdf.set_font("Courier", "", 8)

    for event in events[-200:]:  # cap at last 200 for PDF size
        line = f"[{event.get('timestamp', '')}] {event.get('type', '').upper()}"
        if event.get("key"):
            line += f" | key={event['key']}"
        if event.get("process"):
            line += f" | process={event['process']}"
        if event.get("description"):
            line += f" | {event['description']}"
        pdf.cell(0, 5, line[:110], ln=True)

    pdf.output(str(output_path))
    print(f"[REPORT] Report saved to {output_path}")


if __name__ == "__main__":
    generate()
