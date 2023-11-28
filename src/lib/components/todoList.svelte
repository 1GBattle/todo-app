<script lang="ts">
	import type Todo from '$lib/models/todo';
	import TodoCard from './todoCard.svelte';

	export let todos: Todo[];
</script>

<div class="p-4 flex flex-col gap-8">
	{#each todos as todo, i}
		<TodoCard {todo} position={i + 1} />
	{/each}
</div>

<style>
</style>
