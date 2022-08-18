#!/usr/bin/env bash

url="$1"
filename="$2"

curl --silent "${url}" --output "${filename}"

# urls
# page screenshot: "https://api.urlbox.io/v1/DVfOxRT0urbFc6z1/png?url=https%3A%2F%2Ftechcrunch.com"
# show page w/o navigation: https://api.urlbox.io/v1/DVfOxRT0urbFc6z1/png?url=http%3A%2F%2Ftechcrunch.com&hide_selector=.desktop-nav
# show only featured article: https://api.urlbox.io/v1/DVfOxRT0urbFc6z1/png?url=https%3A%2F%2Ftechcrunch.com%2F&selector=.feature-island
# highlight all occurences of "Amazon": https://api.urlbox.io/v1/DVfOxRT0urbFc6z1/png?full_page=true&url=https%3A%2F%2Ftechcrunch.com&highlight=Amazon&hide_selector=.desktop-nav
