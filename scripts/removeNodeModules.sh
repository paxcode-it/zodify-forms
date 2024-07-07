#!/bin/zsh

# Remove all node_modules folders in the current directory and all subdirectories
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +