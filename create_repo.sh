#!/bin/bash

# GitHub repository information
USERNAME="bmcgjsd4tk-sketch"
REPO_NAME="pomodoro-clock"
DESCRIPTION="A simple and beautiful Pomodoro Clock application built with Electron"

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "GitHub CLI is not installed. Please install it first:"
    echo "  macOS: brew install gh"
    echo "  Or download from: https://github.com/cli/cli"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "Please authenticate with GitHub CLI first:"
    echo "  gh auth login"
    exit 1
fi

# Create repository
gh repo create "$USERNAME/$REPO_NAME" --public --description "$DESCRIPTION" --source=. --remote=origin --push

echo "✅ Repository created successfully!"
echo "Repository URL: https://github.com/$USERNAME/$REPO_NAME"