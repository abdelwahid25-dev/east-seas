#!/bin/bash
# Script to download placeholder images for the East Seas website

cd "$(dirname "$0")/public/images"

echo "Downloading placeholder images..."

# Hero background
curl -o hero-bg.jpg "https://picsum.photos/id/119/1920/1080"
echo "✓ Downloaded hero-bg.jpg"

# About section
curl -o about.jpg "https://picsum.photos/id/452/800/800"
echo "✓ Downloaded about.jpg"

# Service images
curl -o customs.jpg "https://picsum.photos/800/600?random=1"
echo "✓ Downloaded customs.jpg"

curl -o freight.jpg "https://picsum.photos/800/600?random=2"
echo "✓ Downloaded freight.jpg"

curl -o transport.jpg "https://picsum.photos/800/600?random=3"
echo "✓ Downloaded transport.jpg"

curl -o storage.jpg "https://picsum.photos/800/600?random=4"
echo "✓ Downloaded storage.jpg"

curl -o consulting.jpg "https://picsum.photos/800/600?random=5"
echo "✓ Downloaded consulting.jpg"

curl -o onsite.jpg "https://picsum.photos/800/600?random=6"
echo "✓ Downloaded onsite.jpg"

echo ""
echo "All images downloaded successfully!"
echo "You can now replace these with your own images if desired."
