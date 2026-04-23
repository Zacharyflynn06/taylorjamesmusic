<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<section
	id="hero"
	class="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4"
>
	<!-- Background sizzle reel -->
	<div class="absolute inset-0 -z-10">
		<video
			class="h-full w-full object-cover object-center opacity-40"
			autoplay
			loop
			muted
			playsinline
			preload="metadata"
			poster="/sizzle-reel-poster.jpg"
		>
			<source src="/sizzle-reel.webm" type="video/webm" />
			<source src="/sizzle-reel.mp4" type="video/mp4" />
		</video>
		<div
			class="absolute inset-0 bg-linear-to-b from-background/60 via-background/40 to-background/60"
		></div>
	</div>

	<div class="flex max-w-3xl flex-col items-center text-center">
		<!-- Wordmark -->
		<img
			src="/TaylorJames.svg"
			alt="Taylor James"
			class="mb-10 h-auto w-full max-w-md md:max-w-lg"
		/>

		<!-- CTAs -->
		<div class="flex flex-col gap-4 sm:flex-row">
			<Button href="#music" size="lg" class="px-8 text-base">Listen</Button>
			<Button href="#contact" variant="outline" size="lg" class="px-8 text-base">
				Book Taylor
			</Button>
		</div>
	</div>
</section>
