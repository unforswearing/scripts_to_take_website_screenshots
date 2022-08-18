#!/usr/bin/env bash

url="$1"
filename=$(awk -F"/" '{print $3}' <<<"${url}")

command -v gowitness && {
  gowitness single --resolution-x 1200 --resolution-y 800 -o "${filename}" "${url}"
} || {
  print "gowitness is not found."
}
