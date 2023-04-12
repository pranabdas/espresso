#!/bin/bash
sudo apt update
sudo apt install -y --no-install-recommends \
    fonts-open-sans \
    python3 \
    python3-pip
if [ -f requirements.txt ]; then
    pip install -r requirements.txt
fi
npm install
