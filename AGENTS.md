# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static personal portfolio/CV website for Jens Tinfors, hosted on GitHub Pages at `jenstinfors.com`. There is no build step, no framework, and no dependencies to install.

## Deployment

Changes pushed to the `master` branch are automatically deployed via GitHub Pages. The custom domain is configured in `CNAME`.

## Architecture

The entire site is a single file: `index.html`. It uses:

- **Tachyons** (loaded from CDN) for utility-first CSS styling
- **Vanilla JavaScript** (inline `<script>` at bottom of body) for the animated typewriter header that cycles through shuffled buzzwords
- **`images/`** directory for all logo and photo assets

There is no CSS file — all custom styles are in a `<style>` block inside `index.html`, and all layout is done with Tachyons utility classes.
