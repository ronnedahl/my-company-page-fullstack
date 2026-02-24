# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for "Växtkraft Webb" — a Swedish web agency offering web development and AI services to local businesses. All content is in Swedish.

## Architecture

This is a plain HTML/CSS site with no build tools, no frameworks, and no package manager.

- `index.html` — Main landing page (hero, about, services, case studies, footer). Links external `style.css`. Contains inline `<script>` for smooth scrolling and IntersectionObserver bar animations.
- `style.css` — Shared stylesheet for the main page. Uses CSS custom properties defined in `:root` (color palette, border-radius, container width).
- `webbutveckling.html` — Service detail page for web development. Has its own **inline `<style>` block** that duplicates the CSS variables and base reset from `style.css`. Navigates back to `index.html`.
- `assets/` — Contains `working-ai.png` hero image. Other images use external Unsplash URLs.

## Development

No build or install step. Open `index.html` directly in a browser or use any static server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

## Key Conventions

- **Font**: Manrope (Google Fonts CDN)
- **Icons**: Font Awesome 6.4.0 (CDN)
- **Color scheme**: Beige background (`#F3F0E7`), dark green accent (`#064E3B`), with `--accent-green`, `--card-green`, `--light-green` variables
- **Layout**: CSS Grid for major sections (services grid 3-col, about grid 1fr/2fr, case studies 1fr/1fr). Max container width 1200px.
- **Responsive breakpoints**: 900px (tablet — 2-col services, stack grids, hide nav-links) and 600px (mobile — 1-col everything, smaller typography)
- **Nav pattern**: `index.html` has a full nav with anchor links; `webbutveckling.html` uses a simplified header with a back-link

## Known Structural Issues

- `webbutveckling.html` duplicates CSS variables and base reset inline instead of importing `style.css`. Changes to the design system must be synced manually in both places.
- The brand name is inconsistent: the `<title>` tags reference "Wookies" while visible page content uses "Växtkraft Webb".
