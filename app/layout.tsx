import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Analytics } from '@vercel/analytics/react';
import { I18nProvider } from '@/lib/i18n';
import { siteConfig } from '@/content/site.config';
import './globals.css';

export const metadata: Metadata = {
	title: `${siteConfig.communityName} ${siteConfig.communityNameLocal} | Cursor Meetup`,
	description: `Philadelphia meetup for developers and AI enthusiasts exploring Cursor and AI-powered tools. Hosted in ${siteConfig.city}.`,
	openGraph: {
		title: `${siteConfig.communityName} ${siteConfig.communityNameLocal}`,
		description: siteConfig.footerTagline,
		type: 'website',
	},
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	// Opt into dynamic rendering so the per-request CSP nonce from middleware.ts is
	// applied to Next's scripts (required for the strict-dynamic policy to allow them).
	await headers();

	return (
		<html lang={siteConfig.defaultLocale}>
			<body className="antialiased">
				<I18nProvider>{children}</I18nProvider>
				<Analytics />
			</body>
		</html>
	);
}
