# Cursor Meetup Philadelphia Landing Page

A modern landing page for **Cursor Meetup Philadelphia** - a community event series for developers, engineers, and AI enthusiasts who use or are curious about Cursor (an AI-powered code editor) and similar AI development tools.

## About

This landing page showcases upcoming meetup events, provides speaker application forms, newsletter signup, and connects visitors to community resources. The site is built with React and Vite, featuring a dark theme with modern design aesthetics.

**Live Site**: [cursorphilly.com](https://cursorphilly.com)

## Features

- **Hero Section**: Eye-catching introduction with event registration CTAs
- **Upcoming Events**: List of upcoming meetups with dates, venues, and registration links
- **Newsletter Signup**: Substack subscription integration
- **Speaker Application**: Call-to-action for community members to apply as speakers
- **Past Events**: Archive of previous meetups
- **Footer**: Social links and community resources
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## Tech Stack

- **Vite**: Fast build tool and dev server
- **React**: UI library
- **TypeScript**: Type safety
- **shadcn/ui**: Component library
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/luiscielak/cursorphilly.git
   cd cursorphilly
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

The development server will automatically reload when you make changes to the code.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Project Structure

```
landing-page/
├── public/          # Static assets
├── src/
│   ├── components/ # React components
│   ├── pages/      # Page components
│   ├── data/       # Data files (events.json)
│   ├── hooks/      # Custom React hooks
│   ├── lib/        # Utility functions
│   └── utils/      # Helper functions
├── .github/        # GitHub Actions workflows
└── package.json    # Dependencies and scripts
```

## Deployment

This project is deployed to GitHub Pages with a custom domain. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. The site will be available at [cursorphilly.com](https://cursorphilly.com)

## Contributing

This is a project for the Cursor Meetup Philadelphia community. For questions or suggestions, please reach out through the community channels listed in the footer.

## License

MIT
