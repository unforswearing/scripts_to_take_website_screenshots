#!/usr/bin/env bash

url="$1"
filename=$(awk -F"/" '{print $3}' <<<"${url}")

command -v rustywitness && {
  rustywitness -o "${filename}" "${url}"
} || {
  print "rustywitness is not found."
}
