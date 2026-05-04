// Reads every show JSON file written by the CMS and returns a sorted, future-only list.
// Files live at: src/lib/data/shows/*.json
//
// Each file is created/edited by Sveltia CMS and looks like:
//   { "date": "2026-08-12T20:00", "venue": "The Blue Note", "city": "Nashville, TN", "ticketUrl": "...", "notes": "..." }

export type Show = {
	date: string;
	venue: string;
	city: string;
	ticketUrl?: string;
	notes?: string;
};

const modules = import.meta.glob<Show>('./shows/*.json', { eager: true, import: 'default' });

const all: Show[] = Object.values(modules);

// Hide shows whose date is in the past (compare on date only, local time).
const startOfToday = new Date();
startOfToday.setHours(0, 0, 0, 0);

export const upcomingShows: Show[] = all
	.filter((s) => {
		const d = new Date(s.date);
		return !Number.isNaN(d.getTime()) && d >= startOfToday;
	})
	.sort((a, b) => a.date.localeCompare(b.date));
