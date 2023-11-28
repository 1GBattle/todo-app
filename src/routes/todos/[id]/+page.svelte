<script lang="ts">
	import { todosStore } from '$lib/stores/todos';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	$: todo = $todosStore.todos.find((todo) => todo.id === $page.params.id);

	const handleDelete = () => {
		todosStore.deleteTodo(todo!.id);
		goto('/');
	};
</script>

<div class="h-full">
	<div class="p-2 bg-cyan-400 h-2/6">
		<h1 class="font-medium text-3xl text-center">{todo?.title}</h1>
	</div>

	<div class="flex flex-col items-start justify-around h-3/6">
		<div class="p-2">
			<h2 class="font-medium text-2xl">Due Date:</h2>
			<p class="text-lg p-2">{todo?.dueDate}</p>
		</div>
		<div class="p-2">
			<h2 class="font-medium text-2xl">Urgency:</h2>
			<p class="text-lg p-2">{todo?.isUrgent ? 'Urgent' : 'Not Urgent'}</p>
		</div>
		<div class="p-2 overflow-auto">
			<h2 class="font-medium text-2xl">Description:</h2>
			<p class="text-lg p-2">
				{todo?.description ? todo.description : 'No description provided'}
			</p>
		</div>
	</div>

	<div class="p-4 w-full mt-16 flex flex-row justify-between gap-8">
		<button class="p-2 w-1/2 bg-yellow-400 rounded-lg">Edit</button>
		<button class="p-2 w-1/2 bg-red-600 rounded-lg" on:click={handleDelete}>Delete</button>
	</div>
</div>
