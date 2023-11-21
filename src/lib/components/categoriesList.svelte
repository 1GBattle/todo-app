<script lang="ts">
	import CategoryCard from './categoryCard.svelte';

	const categories = ['All', 'Work', 'Personal', 'Shopping', 'Misc'];
</script>

<div class="p-2 h-32 gap-8 flex flex-row justify-between overflow-box">
	{#each categories as category}
		<CategoryCard {category} />
	{/each}
</div>

<style>
</style>
