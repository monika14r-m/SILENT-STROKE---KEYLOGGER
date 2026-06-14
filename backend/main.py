"""
main.py — SILENT-STROKE Entry Point
Defensive Forensic Platform

Usage:
  python main.py capture    — start capturing events
  python main.py report     — generate forensic PDF report
  python main.py verify     — check log integrity
"""

import sys


def main():
    if len(sys.argv) < 2:
        print("Usage: python main.py [capture | report | verify]")
        sys.exit(1)

    command = sys.argv[1].lower()

    if command == "capture":
        from logger import start
        start()

    elif command == "report":
        from report import generate
        generate()

    elif command == "verify":
        from monitor import verify
        verify()

    else:
        print(f"Unknown command: {command}")
        print("Usage: python main.py [capture | report | verify]")


if __name__ == "__main__":
    main()
