<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import Mail from '@lucide/svelte/icons/mail';

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
			<!-- Left column — info -->
			<div>
				<h2 class="mb-2 text-sm font-medium tracking-widest text-foreground uppercase">Contact</h2>
				<Separator class="mb-6 w-12 bg-primary" />
				<h3 class="mb-6 text-3xl text-foreground md:text-4xl">Book Taylor James</h3>
				<p class="mb-8 text-base leading-relaxed text-foreground/80 md:text-lg">
					Available for select concerts, festivals, weddings, corporate events, and private
					performances. Reach out to discuss your event.
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

				<!-- Photo accent -->
				<div class="mt-10 hidden overflow-hidden rounded-2xl md:block">
					<img
						src="/head Shot 2.webp"
						alt="Taylor James performing"
						class="h-auto w-full object-cover"
						loading="lazy"
					/>
				</div>
			</div>

			<!-- Right column — form -->
			<div class="rounded-2xl border bg-card p-6 md:p-8">
				<form class="flex flex-col gap-5">
					<div class="grid gap-5 sm:grid-cols-2">
						<div class="flex flex-col gap-1.5">
							<label for="name" class="text-sm font-medium text-foreground">Name</label>
							<Input id="name" placeholder="Your name" />
						</div>
						<div class="flex flex-col gap-1.5">
							<label for="email" class="text-sm font-medium text-foreground">Email</label>
							<Input id="email" type="email" placeholder="you@example.com" />
						</div>
					</div>

					<div class="flex flex-col gap-1.5">
						<label for="event-type" class="text-sm font-medium text-foreground">Event Type</label>
						<Select.Root type="single" name="event-type" bind:value={eventType}>
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
							placeholder="Tell us about your event — date, location, and any details."
							rows={5}
						/>
					</div>

					<Button type="submit" size="lg" class="mt-2 w-full">Send Inquiry</Button>
				</form>
			</div>
		</div>
	</div>
</section>
