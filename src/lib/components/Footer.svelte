<script lang="ts">
	import { Separator } from "$lib/components/ui/separator/index.js";
</script>

<footer class="bg-brand-brown py-12 text-brand-cream">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="flex flex-col items-center gap-6">
			<!-- Logo -->
			<img src="/only-logo.svg" alt="Taylor James" class="h-12 w-auto" />

			<!-- Social links placeholder -->
			<div class="flex items-center gap-6">
				<a
					href="#"
					class="text-brand-cream/60 hover:text-brand-teal text-sm transition-colors"
					aria-label="Instagram"
				>
					Instagram
				</a>
				<a
					href="#"
					class="text-brand-cream/60 hover:text-brand-teal text-sm transition-colors"
					aria-label="Spotify"
				>
					Spotify
				</a>
				<a
					href="#"
					class="text-brand-cream/60 hover:text-brand-teal text-sm transition-colors"
					aria-label="Facebook"
				>
					Facebook
				</a>
			</div>

			<Separator class="bg-brand-tan/30 w-full" />

			<p class="text-brand-cream/50 text-xs">
				&copy; {new Date().getFullYear()} Taylor James Music. All rights reserved.
			</p>
		</div>
	</div>
</footer>
