<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';

	// TODO: replace `#` with real profile URLs once provided.
	const socials = [
		{ label: 'Instagram', href: '#' },
		{ label: 'TikTok', href: '#' },
		{ label: 'YouTube', href: '#' }
	];
</script>

<footer class="bg-brand-brown text-brand-cream">
	<div class="mx-auto max-w-[1200px] px-4 pt-10 pb-0 md:px-6">
		<Separator class="mb-10 bg-brand-tan/30" />

		<div class="flex flex-col gap-10 pb-10 md:flex-row md:items-center md:justify-between">
			<!-- Left: socials -->
			<div class="flex flex-wrap items-center gap-6">
				{#each socials as s (s.label)}
					<a
						href={s.href}
						class="text-sm text-brand-cream/60 transition-colors hover:text-brand-teal"
						aria-label={s.label}
						target="_blank"
						rel="noopener noreferrer"
					>
						{s.label}
					</a>
				{/each}
			</div>

			<!-- Right: credit -->
			<p class="text-xs text-brand-cream/50">
				Website by <a href="https://zacflynn.dev" class="zfdev" target="_blank" rel="noopener noreferrer">zfdev</a>.
			</p>
		</div>

		<Separator class="bg-brand-tan/20" />

		<p class="py-4 text-center text-xs text-brand-cream/40">
			&copy; {new Date().getFullYear()} Taylor James Music. All rights reserved.
		</p>
	</div>

	<!-- Bottom accent strip -->
	<div class="h-1 w-full bg-linear-to-r from-brand-tan via-brand-teal to-brand-tan"></div>
</footer>

<style>
	.zfdev {
		background-image: linear-gradient(
			110deg,
			var(--color-brand-cream) 0%,
			#7ecece 12.5%,
			var(--color-brand-teal) 25%,
			var(--color-brand-tan) 37.5%,
			var(--color-brand-cream) 50%,
			var(--color-brand-teal) 62.5%,
			#7ecece 75%,
			var(--color-brand-tan) 87.5%,
			var(--color-brand-cream) 93.75%,
			var(--color-brand-cream) 100%
		);
		background-size: 200% 100%;
		animation: zfdev-flow 8s linear infinite;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
	}

	@keyframes zfdev-flow {
		from {
			background-position: 0% 50%;
		}
		to {
			background-position: 200% 50%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.zfdev {
			animation: none;
		}
	}
</style>
