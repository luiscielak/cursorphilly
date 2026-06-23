// Cursor Meetup Philadelphia — public site config (see also CLAUDE.md at repo root)
export const siteConfig = {
	communityName: 'Cursor Meetup',
	communityNameLocal: 'Philadelphia',
	city: 'Philadelphia',
	country: 'United States',
	lumaUrl: 'https://luma.com/cursorcommunity?k=c&tag=philadelphia',
	cursorCommunityUrl: 'https://cursor.com/community',
	defaultLocale: 'en',
	locales: ['en'],
	footerTagline:
		'A community gathering for developers and AI enthusiasts exploring Cursor and AI-powered tools.',
	/** Extra footer / community links (LinkedIn group, Substack, Discord, etc.) */
	communityLinks: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/groups/13297520/' },
		{ label: 'Substack', href: 'https://substack.com/@cursorphilly' },
		{ label: 'Discord', href: 'https://discord.gg/qXPAZNRR3T' },
	],
} as const;

export type SiteConfig = typeof siteConfig;
