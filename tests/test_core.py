"""Tests for SILENT-STROKE backend"""

import pytest
import json
from encrypt import encrypt, decrypt
from monitor import check_integrity
from pathlib import Path


def test_encrypt_decrypt_roundtrip():
    original = "hello world"
    assert decrypt(encrypt(original)) == original


def test_encrypt_produces_different_output():
    data = "test"
    assert encrypt(data) != encrypt(data)  # IV is random each time


def test_encrypt_non_empty():
    result = encrypt("keystroke: a")
    assert len(result) > 0


def test_integrity_passes_on_clean_log(tmp_path, monkeypatch):
    monkeypatch.chdir(tmp_path)
    (tmp_path / "logs").mkdir()
    assert check_integrity() is True
