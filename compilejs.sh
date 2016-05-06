#!/usr/bin/env bash

# Bundle, minify, and mangle our application.
time jspm bundle-sfx app/app.js \
  - [jspm_packages/**/*] \
  public/js/application.js \
  --globals "{'angular': 'angular'}" \
  --minify

# Bundle 3rd-Party Dependencies into one file, but do NOT mangle (they are
# already minified).
time jspm bundle-sfx app/app.js \
  - [app/**/*] \
  public/js/dependencies.js \
  --minify \
  --no-mangle
