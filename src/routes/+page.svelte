<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: { projects: Required<Project>[] };
	import { fade } from 'svelte/transition';
	import LinkButton from './LinkButton.svelte';
	import { onMount } from 'svelte';
	import Project from './Project.svelte';
	const items = ['apps', 'websites', 'developer tools', 'games', '3D digital art'];
	const gradients = [
		['#EF4444', '#EAB308'],
		['#EAB308', '#10B981'],
		['#10B981', '#0EA5E9'],
		['#0EA5E9', '#8B5CF6'],
		['#8B5CF6', '#EC4899']
	];

	let idx = 0;
	let isVisible = true;

	onMount(() => {
		const interval = setInterval(() => {
			isVisible = false;

			setTimeout(() => {
				idx = (idx + 1) % items.length;
				isVisible = true;
			}, 200);
		}, 2000);
		return () => clearInterval(interval);
	});
</script>

<div class="flex bg-header-gradient bg-cover min-h-screen">
	<div class="flex flex-col items-center mt-28 md:mt-28">
		<h1 class="font-extrabold text-5xl md:text-9xl">OVIK DAS</h1>

		<div class="flex flex-row mt-10 text-2xl text-gray-200 md:text-5xl">
			<p>I make</p>
			<p>&nbsp;</p>
			{#if isVisible}
				<p
					transition:fade={{ duration: 500 }}
					class={`font-black pb-2 text-transparent bg-clip-text`}
					style="background-image: linear-gradient(to right, {gradients[idx][0]}, {gradients[
						idx
					][1]});"
				>
					{items[idx]}
				</p>
			{/if}
		</div>
		<p class="text-base md:text-2xl mt-10 md:mt-16 w-4/5 md:w-3/5 text-center text-gray-300">
			I'm a student who's excited about building cool software. Doesn't matter if it's an NPM
			package, a mobile app, or a physics simulator—I'm down.
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10 mt-16">
			<LinkButton href="https://www.github.com/Ovikx" text="GitHub">
				<svg
					slot="svg"
					aria-hidden="true"
					focusable="false"
					role="img"
					class="inline-block align-text-bottom overflow-visible fill-gray-300"
					viewBox="0 0 16 16"
					width="32"
					height="32"
					><path
						d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
					/></svg
				>
			</LinkButton>
			<LinkButton href="https://www.linkedin.com/in/ovik-das" text="LinkedIn">
				<svg
					slot="svg"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="fill-gray-300"
					height="32"
					width="32"
					aria-hidden="true"
					><path
						d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
					/></svg
				>
			</LinkButton>
			<LinkButton href="mailto:ovik.3d@gmail.com" text="Email">
				<svg
					slot="svg"
					class=" fill-gray-300"
					xmlns="http://www.w3.org/2000/svg"
					height="32"
					viewBox="0 -960 960 960"
					width="32"
					><path
						d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"
					/></svg
				>
			</LinkButton>
		</div>
		<svg
			class="animate-bounce fill-gray-700 mt-10"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -960 960 960"
			width="48"
			><path
				d="M480-200 240-440l42-42 198 198 198-198 42 42-240 240Zm0-253L240-693l42-42 198 198 198-198 42 42-240 240Z"
			/></svg
		>
	</div>
</div>
<div class="flex flex-col">
	<h1 class="flex justify-center mt-7 | text-3xl md:text-5xl">PROJECTS</h1>
	<hr class="w-1/12 mx-auto mt-5 border-gray-600" />
	<p class="justify-center mt-5 w-10/12 text-center mx-auto | text-xl md:text-xl">
		Here's a brief overview of some of the projects I've done.
	</p>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 sm:mt-20 w-11/12 mx-auto">
		{#each data.projects as project}
			<Project
				title={project.title}
				description={project.description}
				techs={project.techs}
				href={project.href}
				imgUrl={project.imgUrl}
			/>
		{/each}
	</div>
</div>
<hr class="w-4/12 mx-auto mb-5 mt-10 border-gray-600" />

<footer class="pb-7 flex flex-col gap-2">
	<div class="mx-auto flex flex-row">
		<p class=" text-gray-500">Handcrafted by me, using</p>
		<p>&nbsp;</p>
		<a
			href="https://www.svelte.dev"
			target="_blank"
			class="text-orange-700 hover:text-orange-500 hover:bg-orange-800 rounded-md hover:bg-opacity-20 px-1 transition-all"
			>Svelte</a
		>
	</div>
	<a
		class="mx-auto text-gray-500 hover:text-cyan-500 hover:bg-cyan-800 rounded-md hover:bg-opacity-20 px-1 transition-all"
		href="https://github.com/Ovikx/personal-site"
		target="_blank">View the source code</a
	>
</footer>
