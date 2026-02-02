# Figma Design Prompt: Cursor Meetup Philadelphia Landing Page

## Project Overview
Design a modern, dark-themed landing page for "Cursor Meetup Philadelphia" - a community gathering for developers, designers, engineers, and AI enthusiasts exploring AI-powered development tools like Cursor.

## Design Aesthetic & Visual Style

### Color Palette
- **Primary Background**: Deep black (#0a0a0a) - almost pure black
- **Secondary Background**: Dark gray (#1f1f1f) - for section backgrounds
- **Text Primary**: Off-white (#ededed) - main text color
- **Text Secondary**: Gray with varying opacity (60-70% opacity) for secondary text
- **Accent Color**: Purple (#8b5cf6) - primary brand color for CTAs, highlights, and interactive elements
- **Border Color**: Medium gray (#374151) - for borders and dividers
- **Gradient Colors**: 
  - From: White (#ffffff)
  - Via: Light purple (#c4b5fd)
  - To: Medium purple (#a78bfa)

### Visual Effects
- **Dithering Pattern**: Subtle crosshatch/grid pattern overlay using purple accent color at low opacity (10% with 60% overall opacity). Use repeating linear gradients at 1-2px intervals to create a retro/digital texture effect
- **Typography**: Modern sans-serif system fonts (SF Pro, Segoe UI, Roboto family)
- **Overall Mood**: Tech-forward, modern, community-focused, slightly retro/digital aesthetic

## Layout Structure

### 1. Hero Section (Full Viewport Height)
- **Background**: Deep black with strong dithering pattern overlay
- **Layout**: Centered, vertical stack
- **Content**:
  - **Main Heading**: "Cursor Meetup" - Large display text (96px desktop, responsive), bold weight, gradient text effect (white → light purple → medium purple)
  - **Subheading**: "Philadelphia" - Medium size (32px), light weight, off-white with 70% opacity
  - **Description**: Single paragraph, max-width 2xl, centered, off-white with 60% opacity
  - **CTA Buttons**: Two buttons side-by-side (stacked on mobile)
    - Primary: Purple background (#8b5cf6), white text, rounded corners (8px), shadow with purple glow
    - Secondary: Transparent with border, white text, rounded corners
- **Spacing**: Generous vertical padding (80px top/bottom)

### 2. Events List Section
- **Background**: Deep black (same as page background)
- **Layout**: Centered container, max-width 4xl
- **Content**:
  - **Section Title**: "Upcoming Events" - Large heading (48px), bold, centered, off-white
  - **Event Cards**: Vertical stack of cards with spacing
    - Each card: Dark background, border (medium gray), rounded corners (8px), padding
    - Card content: Date (small, purple accent), Venue name (large, bold), Address (medium, muted), Time (small, more muted)
    - Action button: Purple CTA on right side (or full-width on mobile)
    - Hover state: Border changes to purple accent color
    - Subtle dithering pattern overlay on cards
- **Spacing**: 80px vertical padding, 24px gap between cards

### 3. Newsletter Signup Section
- **Background**: Dark gray (#1f1f1f) - slightly lighter than main background
- **Layout**: Centered, max-width 2xl, text-centered
- **Content**:
  - **Heading**: "Stay Updated" - Large (48px), bold, off-white
  - **Description**: Single line, muted text (60% opacity)
  - **CTA Button**: Purple button, centered, "Subscribe on Substack"
  - **Footer text**: Small, very muted (50% opacity), emoji + "Cursor Philly"
- **Spacing**: 80px vertical padding

### 4. Speaker Application Section
- **Background**: Deep black
- **Layout**: Centered, max-width 3xl
- **Content**:
  - **Heading**: "Interested in Speaking?" - Large (48px), bold, centered, off-white
  - **Description**: Centered paragraph, max-width 2xl, muted
  - **Content Card**: Dark gray background (#1f1f1f), border, rounded corners, padding
    - **Subheading**: "What We're Looking For" - Medium size, semibold
    - **Bullet List**: 5 items, each with purple bullet point, left-aligned
    - **Additional Info**: Small text, muted, below list
    - **CTA Button**: Full-width purple button at bottom
  - Subtle dithering pattern on content card
- **Spacing**: 80px vertical padding

### 5. Footer Section
- **Background**: Deep black
- **Layout**: Two-column (stacked on mobile), max-width 6xl
- **Content**:
  - **Left Column**: 
    - Title: "Cursor Meetup Philadelphia" - Medium size, bold
    - Description: Small text, muted
  - **Right Column**: 
    - Social links: Horizontal row, links to Luma, LinkedIn, Substack, Discord
    - Links: Muted text (60% opacity), hover to purple accent
  - **Bottom Section**: 
    - Divider line
    - Copyright text: Very small, very muted (50% opacity)
    - "Presented by" text with link to Cursor Community (purple accent)
- **Spacing**: 48px vertical padding, 32px gap between sections

## Typography Scale
- **Hero Title**: 96px (desktop) / 48px (mobile) - Bold
- **Hero Subtitle**: 32px (desktop) / 24px (mobile) - Light
- **Section Titles**: 48px (desktop) / 36px (mobile) - Bold
- **Card Titles**: 24px - Semibold
- **Body Text**: 18px - Regular
- **Small Text**: 14px - Regular
- **Button Text**: 16px - Semibold

## Component Specifications

### Buttons
- **Primary Button**:
  - Background: Purple (#8b5cf6)
  - Text: White
  - Padding: 32px horizontal, 16px vertical
  - Border Radius: 8px
  - Shadow: Purple glow (20% opacity)
  - Hover: Slight scale (105%), brightness increase

- **Secondary Button**:
  - Background: Transparent
  - Border: 1px solid medium gray (#374151)
  - Text: Off-white
  - Padding: Same as primary
  - Border Radius: 8px
  - Hover: Border changes to purple accent

### Cards
- **Background**: Dark gray (#1f1f1f) or transparent with border
- **Border**: 1px solid medium gray (#374151)
- **Border Radius**: 8px
- **Padding**: 24px (events) or 32px (speaker section)
- **Hover**: Border color changes to purple accent
- **Overlay**: Subtle dithering pattern

### Borders & Dividers
- **Color**: Medium gray (#374151)
- **Thickness**: 1px
- **Style**: Solid

## Responsive Breakpoints
- **Mobile**: < 640px - Stacked layouts, reduced font sizes, full-width buttons
- **Tablet**: 640px - 1024px - Some side-by-side layouts, medium font sizes
- **Desktop**: > 1024px - Full layouts, maximum font sizes, side-by-side elements

## Interactive States
- **Hover States**: 
  - Buttons: Scale up 5%, brightness increase, shadow intensifies
  - Cards: Border color changes to purple
  - Links: Color changes to purple accent, opacity increases
- **Transitions**: Smooth 200ms transitions on all interactive elements

## Additional Design Notes
- Use consistent spacing system (multiples of 4px or 8px)
- Maintain generous whitespace for breathing room
- Ensure high contrast for accessibility (WCAG AA compliance)
- The dithering effect should be subtle - visible but not distracting
- Gradient text should be smooth and elegant
- All interactive elements should have clear hover states
- Design should feel modern but approachable, tech-forward but not intimidating

## Content to Include (Placeholder Text)
- Hero: "A Philadelphia-based community for developers, designers, engineers, and AI enthusiasts exploring how tools like Cursor are reshaping the way we build, design, and think."
- Events: Sample event cards with dates, venues, addresses, times
- Newsletter: "Subscribe to our newsletter for event updates, recaps, and community news."
- Speaker: List of 5 topics they're looking for, plus application instructions
- Footer: Social links and copyright information

---

**Design Goal**: Create a cohesive, modern landing page that feels both professional and community-oriented, with a distinctive dark aesthetic that appeals to developers and tech enthusiasts while maintaining excellent usability and accessibility.
