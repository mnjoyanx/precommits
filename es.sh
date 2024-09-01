#!/bin/bash

# Run ESLint
echo "Running ESLint..."
npx eslint .

# Check ESLint exit code
if [ $? -ne 0 ]; then
    echo "ESLint found issues. Please fix them before continuing."
    exit 1
fi

# # Run Prettier
# echo "Running Prettier..."
# npx prettier --write .

# echo "Linting and formatting completed successfully!"