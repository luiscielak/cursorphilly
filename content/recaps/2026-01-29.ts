import { RecapData } from '@/lib/types';

export const recap20260129: RecapData = {
	slug: '2026-01-29',
	title: 'Cursor Meetup Philadelphia — January 29, 2026',
	date: 'January 29, 2026',
	attendees: 70,
	summary: [
		'An evening at Indy Hall focused on real-world Cursor workflows, guardrails for AI pair programming, and trustworthy agent patterns.',
		'Lightning talks covered failure modes when pair-programming with AI and how Cursor Hooks can keep coding agents aligned with team standards.',
	],
	host: {
		name: 'Indy Hall',
		logo: '/images/partners/indy-hall.svg',
		url: 'https://www.indyhall.org/',
	},
	speakers: [
		{
			name: 'Michael Flores',
			topic: 'Failure Modes of Pair-Programming With AI (and the Guardrails That Fix Them)',
			url: 'https://www.linkedin.com/in/mikeflores1/',
		},
		{
			name: 'Matt Maisel',
			topic: 'Trustworthy Coding Agents with Cursor Hooks',
			url: 'https://www.linkedin.com/in/matthewmaisel/',
		},
	],
	photos: [
		{
			src: '/images/events/cursor-event-01.jpg',
			alt: 'Cursor Meetup Philadelphia community',
		},
		{
			src: '/images/events/cursor-event-03.jpg',
			alt: 'Attendees at Indy Hall',
		},
	],
};
