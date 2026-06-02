#!/bin/bash

# Check for outdated packages
npm install -g npm-check
npm-check --skip-unused --skip-missing --skip-optional