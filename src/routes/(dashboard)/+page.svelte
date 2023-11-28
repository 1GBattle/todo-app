<script lang="ts">
	import CategoriesList from '$lib/components/categoriesList.svelte';
	import TodoList from '$lib/components/todoList.svelte';
	import { todosStore } from '$lib/stores/todos';
	import { onMount } from 'svelte';

	onMount(async () => {
		await todosStore.getTodos();
	});

	$: todos = $todosStore.todos;
</script>

<CategoriesList />

<div class="p-2">
	<h1 class="font-medium text-3xl text-center">Today View</h1>
</div>

<TodoList {todos} />
