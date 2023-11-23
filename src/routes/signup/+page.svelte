<!-- create signup page with tailwind css -->

<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';

	export let email = '';
	export let password = '';
	export let error = '';

	const pageStore = writable(page);
</script>

<div class="flex flex-col items-center justify-center h-screen">
	<div class="flex flex-col items-center justify-center w-1/2">
		<h1 class="text-4xl font-medium">Signup</h1>
		<form class="flex flex-col items-center justify-center w-full">
			<div class="flex flex-col items-center justify-center w-full">
				<label for="email" class="text-xl font-medium">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					class="p-2 w-full rounded-lg"
					bind:value={email}
				/>
			</div>
			<div class="flex flex-col items-center justify-center w-full">
				<label for="password" class="text-xl font-medium">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					class="p-2 w-full rounded-lg"
					bind:value={password}
				/>
			</div>
			{#if error}
				<p class="text-red-600">{error}</p>
			{/if}
			<button type="submit" class="p-2 w-full bg-green-400 rounded-lg">Signup</button>
		</form>
	</div>
</div>
