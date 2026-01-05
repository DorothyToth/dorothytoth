#!/usr/bin/env node

import { glob } from 'glob';

import validateFile from './validate-file.js';

// Directories to search
const directories = ['./out', './projects'];

let allFiles = [];

// Collect all HTML files from all directories
for (const dir of directories) {
    const files = await glob(`${dir}/**/*.html`);
    console.log(`Found ${files.length} HTML file(s) in ${dir}`);
    allFiles.push(...files);
}

console.log(`Total: ${allFiles.length} HTML file(s) to validate`);
console.log('---');

// Validate each file
for (const file of allFiles) {
    await validateFile(file);
}

console.log('Validation complete!');