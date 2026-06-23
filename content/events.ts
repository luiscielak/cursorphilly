import { CursorEvent } from '@/lib/types';

const indyHall = {
	venue: 'Indy Hall',
	address: '709 N 2nd St 3rd Floor, Philadelphia, PA 19123',
	time: '6:00 – 8:30 PM',
};
const indyHallLocation = `${indyHall.venue}, ${indyHall.address}`;

export const events: CursorEvent[] = [
	{
		id: 'philly-workshop-business-os-2026-06-09',
		title: 'Design Your Business Operating System',
		date: '2026-06-09',
		displayDate: 'June 9, 2026',
		location: 'Online · Google Meet',
		venue: 'Online · Google Meet',
		time: '6:00 – 8:00 PM EDT',
		format: 'online',
		lumaUrl: 'https://luma.com/8r9mic8t',
	},
	{
		id: 'philly-2026-06-30',
		title: 'Cursor Meetup Philadelphia — June',
		date: '2026-06-30',
		displayDate: 'June 30, 2026',
		location: indyHallLocation,
		venue: indyHall.venue,
		address: indyHall.address,
		time: indyHall.time,
		format: 'in-person',
		lumaUrl: 'https://luma.com/1rm6wsz6',
	},
	{
		id: 'philly-cafe-2026-07-16',
		title: 'Cafe Cursor Philadelphia',
		date: '2026-07-16',
		displayDate: 'July 16, 2026',
		location: 'Percy Diner & Bar, 1700 N Front St, Philadelphia, PA 19122',
		venue: 'Percy Diner & Bar',
		address: '1700 N Front St, Philadelphia, PA 19122',
		time: '10:00 AM – 3:00 PM',
		format: 'in-person',
		lumaUrl: 'https://luma.com/tkx269iu',
	},
	{
		id: 'philly-2026-05-26',
		title: 'Cursor Meetup Philadelphia — May',
		date: '2026-05-26',
		displayDate: 'May 26, 2026',
		location: indyHallLocation,
		venue: indyHall.venue,
		address: indyHall.address,
		time: indyHall.time,
		format: 'in-person',
		lumaUrl: 'https://luma.com/sxcpht6k',
	},
	{
		id: 'philly-2026-04-28',
		title: 'Cursor Meetup Philadelphia — April',
		date: '2026-04-28',
		displayDate: 'April 28, 2026',
		location: indyHallLocation,
		venue: indyHall.venue,
		address: indyHall.address,
		time: indyHall.time,
		format: 'in-person',
		lumaUrl: 'https://luma.com/adpxm0s7',
	},
	{
		id: 'philly-2026-03-31',
		title: 'Cursor Meetup Philadelphia — March',
		date: '2026-03-31',
		displayDate: 'March 31, 2026',
		location: indyHallLocation,
		venue: indyHall.venue,
		address: indyHall.address,
		time: indyHall.time,
		format: 'in-person',
		lumaUrl: 'https://luma.com/j1d4fg2z',
	},
	{
		id: 'philly-2026-02-24',
		title: 'Cursor Meetup Philadelphia — February',
		date: '2026-02-24',
		displayDate: 'February 24, 2026',
		location: indyHallLocation,
		venue: indyHall.venue,
		address: indyHall.address,
		time: indyHall.time,
		format: 'in-person',
		lumaUrl: 'https://luma.com/f6egsatb',
		recapPath: '/recaps/2026-02-24',
		thumbnail: '/images/events/cursor-event-02.jpg',
		galleryImages: ['/images/events/cursor-event-04.jpg', '/images/events/cursor-event-05.jpg'],
	},
	{
		id: 'philly-2026-01-29',
		title: 'Cursor Meetup Philadelphia — January',
		date: '2026-01-29',
		displayDate: 'January 29, 2026',
		attendees: 70,
		location: indyHallLocation,
		venue: indyHall.venue,
		address: indyHall.address,
		time: indyHall.time,
		format: 'in-person',
		lumaUrl: 'https://luma.com/cbyt2uxo',
		recapPath: '/recaps/2026-01-29',
		thumbnail: '/images/events/cursor-event-01.jpg',
		galleryImages: ['/images/events/cursor-event-03.jpg', '/images/events/cursor-event-06.jpg'],
	},
	{
		id: 'philly-2025-09-17',
		title: 'Cursor Meetup Philadelphia',
		date: '2025-09-17',
		displayDate: 'September 17, 2025',
		location: 'Blah Blah Gallery, Philadelphia, PA',
		venue: 'Blah Blah Gallery',
		time: indyHall.time,
		format: 'in-person',
	},
	{
		id: 'philly-2025-08-14',
		title: 'Cursor Meetup Philadelphia',
		date: '2025-08-14',
		displayDate: 'August 14, 2025',
		location: 'Forin Café, Philadelphia, PA',
		venue: 'Forin Café',
		time: indyHall.time,
		format: 'in-person',
	},
];

/** Today's date (YYYY-MM-DD) in Philadelphia, so events stay "upcoming" through the end of their day. */
function phillyToday(): string {
	return new Intl.DateTimeFormat('en-CA', {
		timeZone: 'America/New_York',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	}).format(new Date());
}

const today = phillyToday();
const visibleEvents = events.filter((event) => !event.hidden);

export const upcomingEvents = visibleEvents
	.filter((event) => event.date >= today)
	.sort((a, b) => a.date.localeCompare(b.date));

export const pastEvents = visibleEvents
	.filter((event) => event.date < today)
	.sort((a, b) => b.date.localeCompare(a.date));
