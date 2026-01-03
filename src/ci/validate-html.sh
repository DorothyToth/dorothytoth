#!/bin/bash

# Directories to search
directories=("./out" "./projects")

# Check if directories exist and count total files
total=0
for dir in "${directories[@]}"; do
    if [ ! -d "$dir" ]; then
        echo "Warning: $dir directory not found, skipping..."
    else
        count=$(find "$dir" -type f -name "*.html" 2>/dev/null | wc -l)
        total=$((total + count))
        echo "Found $count HTML file(s) in $dir"
    fi
done

echo "Total: $total HTML file(s) to validate"
echo "---"

# Validate each file in both directories
for dir in "${directories[@]}"; do
    if [ -d "$dir" ]; then
        find "$dir" -type f -name "*.html" 2>/dev/null | while read -r file; do
            echo "Validating: $file"
            pnpm html-validate "$file"
            echo "---"
        done
    fi
done

echo "Validation complete!"