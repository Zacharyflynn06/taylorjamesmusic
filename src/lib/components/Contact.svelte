<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import Mail from '@lucide/svelte/icons/mail';
	import contactImg from '$lib/assets/images/head-shot-stool.webp?enhanced';

	const eventTypes: Record<string, string> = {
		concert: 'Concert / Festival',
		wedding: 'Wedding',
		corporate: 'Corporate Event',
		private: 'Private Performance',
		other: 'Other'
	};

	let eventType = $state<string>('');
</script>

<section id="contact" class="bg-muted/50 py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="grid gap-12 md:grid-cols-2 md:gap-16">
			<!-- Info (desktop: col 1 row 1) -->
			<div>
				<h2 class="mb-2 text-sm font-medium tracking-widest text-foreground uppercase">Contact</h2>
				<Separator class="mb-6 w-12 bg-primary" />
				<h3 class="mb-6 text-3xl text-foreground md:text-4xl">Book Taylor James</h3>
				<p class="mb-8 text-base leading-relaxed text-foreground/80 md:text-lg">
					Available for public events, private events, festivals, corporate events, and weddings.
					Please reach out to discuss your event!
				</p>

				<div class="flex items-center gap-3">
					<div class="flex size-10 items-center justify-center rounded-full bg-primary/10">
						<Mail class="size-5 text-primary" />
					</div>
					<a
						href="mailto:booking@taylorjamesmusic.com"
						class="text-sm font-medium text-primary transition-colors hover:text-primary/80"
					>
						booking@taylorjamesmusic.com
					</a>
				</div>
			</div>

			<!-- Form (desktop: col 2, spans both rows) -->
			<div class="rounded-2xl border bg-card p-6 md:row-span-2 md:p-8">
				<form
					name="booking"
					method="POST"
					data-netlify="true"
					action="/?submitted=1#contact"
					class="flex flex-col gap-5"
					{...{ 'netlify-honeypot': 'bot-field' }}
				>
					<input type="hidden" name="form-name" value="booking" />
					<p class="hidden">
						<label>Don’t fill this out: <input name="bot-field" /></label>
					</p>
					<div class="grid gap-5 sm:grid-cols-2">
						<div class="flex flex-col gap-1.5">
							<label for="name" class="text-sm font-medium text-foreground">Name</label>
							<Input id="name" name="name" placeholder="Your name" required />
						</div>
						<div class="flex flex-col gap-1.5">
							<label for="email" class="text-sm font-medium text-foreground">Email</label>
							<Input id="email" name="email" type="email" placeholder="you@example.com" required />
						</div>
					</div>

					<div class="flex flex-col gap-1.5">
						<label for="event-type" class="text-sm font-medium text-foreground">Event Type</label>
						<input type="hidden" name="event-type" value={eventType} />
						<Select.Root type="single" bind:value={eventType}>
							<Select.Trigger id="event-type" class="w-full">
								<span data-slot="select-value" class={eventType ? '' : 'text-muted-foreground'}>
									{eventType ? eventTypes[eventType] : 'Select event type'}
								</span>
							</Select.Trigger>
							<Select.Content>
								{#each Object.entries(eventTypes) as [value, label] (value)}
									<Select.Item {value}>{label}</Select.Item>
								{/each}
							</Select.Content>
						</Select.Root>
					</div>

					<div class="flex flex-col gap-1.5">
						<label for="message" class="text-sm font-medium text-foreground">Message</label>
						<Textarea
							id="message"
							name="message"
							placeholder="Tell us about your event — date, location, and any details."
							rows={5}
							required
						/>
					</div>

					<Button type="submit" size="lg" class="mt-2 w-full">Send Inquiry</Button>
				</form>
			</div>

			<!-- Photo accent (desktop: col 1 row 2; mobile: below form) -->
			<div class="overflow-hidden rounded-2xl">
				<enhanced:img
					src={contactImg}
					alt="Taylor James performing"
					sizes="(min-width: 768px) 600px, 100vw"
					class="h-auto w-full object-cover"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>
