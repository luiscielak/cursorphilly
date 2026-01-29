# Quick Start Guide

## Running the Development Server

1. **Navigate to the landing-page directory:**
   ```bash
   cd landing-page
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Go to: `http://localhost:3000`
   - You should see the Cursor Meetup landing page

## What You Should See

- **Hero Section**: Large "Cursor Meetup" title with gradient text
- **Events List**: Upcoming events with dates and venues
- **Newsletter Signup**: Substack subscription section
- **Speaker Application**: Call-to-action for speakers
- **Footer**: Social links

## Troubleshooting

### Port Already in Use
If port 3000 is busy, Next.js will automatically use the next available port (3001, 3002, etc.). Check the terminal output for the actual URL.

### Module Not Found Errors
If you see import errors, make sure you're in the `landing-page` directory and run:
```bash
npm install
```

### TypeScript Errors
The project uses TypeScript. If you see type errors, they should be shown in the terminal. Most common issues:
- Missing type definitions (should be auto-installed)
- Path alias issues (check `tsconfig.json`)

### Browser Shows Blank Page
1. Check browser console for errors (F12 or Cmd+Option+I)
2. Check terminal for compilation errors
3. Try hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

## Next Steps After Running

1. **Update Configuration:**
   - Edit `CONFIG.md` for a list of URLs to update
   - Update placeholder URLs in components

2. **Customize:**
   - Edit `data/events.json` to add/update events
   - Modify colors in `app/globals.css`
   - Adjust components as needed

3. **Deploy:**
   - See `README.md` for GitHub Pages deployment instructions

## Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server (requires build first)

# Code Quality
npm run lint         # Run ESLint
```
