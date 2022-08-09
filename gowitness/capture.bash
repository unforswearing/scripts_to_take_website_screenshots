#!/usr/bin/env bash

command -v gowitness && {
  gowitness single -o ./ "https://www.urlbox.io"
} || {
  print "gowitness is not found."
}
