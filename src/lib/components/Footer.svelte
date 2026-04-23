<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';

	// TODO: replace `#` with real profile URLs once provided.
	const socials = [
		{ label: 'Instagram', href: '#' },
		{ label: 'TikTok', href: '#' },
		{ label: 'YouTube', href: '#' }
	];
</script>

<footer class="bg-brand-brown py-12 text-brand-cream">
	<div class="mx-auto max-w-[1200px] px-4 md:px-6">
		<div class="flex flex-col items-center gap-6">
			<!-- Logo -->
			<img src="/only-logo.svg" alt="Taylor James" class="h-12 w-auto" />

			<!-- Social links -->
			<div class="flex items-center gap-6">
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

			<Separator class="w-full bg-brand-tan/30" />

			<p class="text-xs text-brand-cream/50">
				&copy; {new Date().getFullYear()} Taylor James Music. All rights reserved.
			</p>
		</div>
	</div>
</footer>
