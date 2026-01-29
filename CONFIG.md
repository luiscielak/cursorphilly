# Configuration Guide

Before deploying, update the following placeholder URLs and links:

## Required Updates

### 1. Newsletter Signup (`components/NewsletterSignup.tsx`)
- **Line 4**: Substack URL is already set to: `https://substack.com/@cursorphilly`

### 2. Speaker Application (`components/SpeakerApplication.tsx`)
- **Line 4**: Update `airtableFormUrl` with your Airtable form URL
  ```typescript
  const airtableFormUrl = "https://airtable.com/app.../form...";
  ```

### 3. Footer Links (`components/Footer.tsx`)
- **Lines 4-9**: Update all social media links:
  ```typescript
  const links = {
    luma: "https://lu.ma/cursor-philly", // Your Luma profile/group
    linkedin: "https://linkedin.com/groups/...", // LinkedIn group URL
    substack: "https://substack.com/@cursorphilly", // Cursor Philly Substack
    discord: "https://discord.gg/FYk5V2nF" // Cursor Philly Discord
  };
  ```

### 4. GitHub Pages Base Path (`next.config.ts`)
- **Line 6**: Update `basePath` with your repository name (uncomment when ready):
  ```typescript
  basePath: '/your-repo-name', // Only needed for GitHub Pages
  ```

### 5. Events Data (`data/events.json`)
- Update the `upcoming` array with your actual events
- Add new events as they're created
- Remove past events or move them to a `past` array if needed

## Quick Checklist

- [ ] Substack URL updated
- [ ] Airtable form URL updated
- [ ] LinkedIn group URL updated
- [ ] Discord invite URL updated
- [ ] Luma profile/group URL updated
- [ ] Events data updated
- [ ] GitHub Pages basePath configured (if deploying to GitHub Pages)

## Testing Locally

After updating URLs, test locally:
```bash
npm run dev
```

Visit `http://localhost:3000` and verify all links work correctly.
