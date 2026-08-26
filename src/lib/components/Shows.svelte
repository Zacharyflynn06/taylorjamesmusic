<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Ticket from '@lucide/svelte/icons/ticket';
	import { upcomingShows } from '$lib/data/shows';

	const dateFmt = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
	const timeFmt = new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		minute: '2-digit'
	});

	function formatDate(iso: string) {
		const d = new Date(iso);
		return Number.isNaN(d.getTime()) ? '' : dateFmt.format(d);
	}

	function formatTime(iso: string) {
		const d = new Date(iso);
		// Only render a time if the value actually included one (length > 10 = has T...).
		if (Number.isNaN(d.getTime()) || iso.length <= 10) return '';
		return timeFmt.format(d);
	}

	// The CMS ticket field is free text, so it sometimes holds a note ("Free with
	// admission") rather than a link. Return a usable href only for real external
	// links — anything else would render as a bogus internal link and fail prerendering.
	function toTicketHref(value?: string) {
		const raw = value?.trim();
		if (!raw) return '';
		// Bare domains typed without a scheme are still links.
		const candidate = /^[a-z][a-z0-9+.-]*:/i.test(raw) ? raw : `https://${raw}`;
		try {
			const url = new URL(candidate);
			if (url.protocol === 'mailto:') return url.href;
			if (url.protocol !== 'http:' && url.protocol !== 'https:') return '';
			// A hostname with no dot ("Free") is prose, not a domain.
			return url.hostname.includes('.') ? url.href : '';
		} catch {
			return '';
		}
	}
</script>

<section id="shows" class="py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-12 text-center">
			<h2 class="mb-2 text-sm font-medium tracking-widest text-foreground uppercase">Shows</h2>
			<Separator class="mx-auto mb-6 w-12 bg-primary" />
		</div>

		{#if upcomingShows.length === 0}
			<div
				class="mx-auto flex max-w-lg flex-col items-center rounded-2xl border border-dashed py-16"
			>
				<div class="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
					<CalendarDays class="size-7 text-primary" />
				</div>
				<p class="mb-2 text-lg font-medium text-foreground">No shows currently scheduled</p>
				<p class="text-sm text-muted-foreground">Check back soon for upcoming dates.</p>
			</div>
		{:else}
			<ul class="mx-auto max-w-3xl divide-y divide-border rounded-2xl border bg-card">
				{#each upcomingShows as show (show.date + show.venue)}
					{@const time = formatTime(show.date)}
					{@const ticketHref = toTicketHref(show.ticketUrl)}
					<li class="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 md:p-6">
						<div class="flex shrink-0 flex-col sm:w-32">
							<span class="text-sm font-medium tracking-wide text-primary uppercase">
								{formatDate(show.date)}
							</span>
							{#if time}
								<span class="text-xs text-muted-foreground">{time}</span>
							{/if}
						</div>

						<div class="flex-1">
							<p class="text-lg font-medium text-foreground">{show.venue}</p>
							<p class="flex items-center gap-1.5 text-sm text-muted-foreground">
								<MapPin class="size-3.5" />
								{show.city}
							</p>
							{#if show.notes}
								<p class="mt-2 text-sm text-foreground/70">{show.notes}</p>
							{/if}
						</div>

						{#if ticketHref}
							<Button
								href={ticketHref}
								target="_blank"
								rel="noopener noreferrer"
								size="sm"
								class="shrink-0"
							>
								<Ticket class="size-4" />
								Tickets
							</Button>
						{:else if show.ticketNote || show.ticketUrl}
							<span
								class="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase sm:self-auto"
							>
								<Ticket class="size-3.5" />
								{show.ticketNote || show.ticketUrl}
							</span>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>
