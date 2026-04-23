<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import Music2 from '@lucide/svelte/icons/music-2';
	import { videos } from '$lib/data/videos';
</script>

<section id="music" class="bg-muted/50 py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-12 text-center">
			<h2 class="mb-2 text-sm font-medium tracking-widest text-foreground uppercase">Music</h2>
			<Separator class="mx-auto mb-6 w-12 bg-primary" />
			<h3 class="mb-4 text-3xl text-foreground md:text-4xl">Listen &amp; Watch</h3>
		</div>

		{#if videos.length > 0}
			<div class="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each videos as video (video.id)}
					<div
						class="aspect-video overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm"
					>
						<iframe
							src={`https://www.youtube-nocookie.com/embed/${video.id}`}
							title={video.title}
							loading="lazy"
							allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
							class="h-full w-full border-0"
						></iframe>
					</div>
				{/each}
			</div>
		{:else}
			<div class="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each [1, 2, 3] as id (id)}
					<Card.Root class="border-border/50 bg-card">
						<Card.Content class="flex flex-col items-center justify-center py-16">
							<div class="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
								<Music2 class="size-7 text-primary" />
							</div>
							<p class="text-sm text-muted-foreground">Coming Soon</p>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		{/if}
	</div>
</section>
