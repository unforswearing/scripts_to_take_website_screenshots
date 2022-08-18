#!/usr/bin/env bash

url="${1}"
filename=$(awk -F"/" '{print $3}' <<<"${url}")

shot-scraper "${url}" -o "${filename}.png" --width 1200 --height 800
