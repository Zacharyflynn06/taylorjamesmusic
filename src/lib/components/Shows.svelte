<script lang="ts">
	import { Separator } from "$lib/components/ui/separator/index.js";
	import CalendarDays from "@lucide/svelte/icons/calendar-days";
</script>

<section id="shows" class="py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-12 text-center">
			<h2 class="text-foreground mb-2 text-sm font-medium tracking-widest uppercase">
				Shows
			</h2>
			<Separator class="bg-primary mx-auto mb-6 w-12" />
			<h3 class="text-foreground mb-4 text-3xl md:text-4xl">
				Upcoming Dates
			</h3>
		</div>

		<!-- Empty state -->
		<div class="mx-auto flex max-w-lg flex-col items-center rounded-2xl border border-dashed py-16">
			<div class="bg-muted mb-4 flex size-16 items-center justify-center rounded-full">
				<CalendarDays class="text-primary size-7" />
			</div>
			<p class="text-foreground mb-2 text-lg font-medium">No shows currently scheduled</p>
			<p class="text-muted-foreground text-sm">Check back soon for upcoming dates.</p>
		</div>
	</div>
</section>
