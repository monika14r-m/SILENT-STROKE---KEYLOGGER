"""
encrypt.py — AES-256 Encryption Module
SILENT-STROKE | Defensive Forensic Platform
"""

import os
import base64
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding
from cryptography.hazmat.backends import default_backend


KEY_FILE = ".ss_key"


def generate_key() -> bytes:
    """Generate and persist a 256-bit AES key."""
    key = os.urandom(32)
    with open(KEY_FILE, "wb") as f:
        f.write(key)
    return key


def load_key() -> bytes:
    """Load existing key or generate a new one."""
    if os.path.exists(KEY_FILE):
        with open(KEY_FILE, "rb") as f:
            return f.read()
    return generate_key()


def encrypt(data: str) -> str:
    """Encrypt a string with AES-256 CBC. Returns base64-encoded ciphertext."""
    key = load_key()
    iv = os.urandom(16)

    padder = padding.PKCS7(128).padder()
    padded = padder.update(data.encode()) + padder.finalize()

    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    encryptor = cipher.encryptor()
    ciphertext = encryptor.update(padded) + encryptor.finalize()

    return base64.b64encode(iv + ciphertext).decode()


def decrypt(token: str) -> str:
    """Decrypt a base64-encoded AES-256 CBC ciphertext."""
    key = load_key()
    raw = base64.b64decode(token)
    iv, ciphertext = raw[:16], raw[16:]

    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    decryptor = cipher.decryptor()
    padded = decryptor.update(ciphertext) + decryptor.finalize()

    unpadder = padding.PKCS7(128).unpadder()
    return (unpadder.update(padded) + unpadder.finalize()).decode()
