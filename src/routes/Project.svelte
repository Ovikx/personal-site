<script lang="ts">
	import Tech from './Tech.svelte';
	export let title: string;
	export let techs: string[];
	export let description: string;
	export let href: string;
	export let imgUrl = '';
</script>

<a
	class="grid grid-cols-5 border-2 border-gray-800 rounded-2xl p-7 hover:border-gray-700 hover:bg-gray-800 hover:bg-opacity-40 hover:shadow-lg hover:shadow-gray-800 hover:scale-[1.02] transition-all duration-500"
	{href}
	target="_blank"
>
	<div class="flex flex-col text-start items-start gap-4 col-span-3 mr-2">
		<h1 class="font-bold text-xl md:text-3xl">{title}</h1>
		<p class="text-xs md:text-sm lg:text-base">{description}</p>
		<div class="flex flex-row flex-wrap gap-1 sm:gap-2">
			{#each techs as tech}
				<Tech name={tech} />
			{/each}
		</div>
	</div>
	<img class="my-auto rounded-2xl col-span-2" src={imgUrl} alt={imgUrl} />
</a>
