<script lang="ts">
	import type Todo from '$lib/models/todo';

	export let todo: Todo;
	export let position: number;
</script>

<a
	href={`/todos/${todo.id}`}
	class="shadow-lg p-2 flex justify-between items-center h-20 w-full cursor-pointer"
>
	<div class="flex flex-col">
		<div class="text-xl">{todo.title}</div>
		<div class="text-sm">{todo.isComplete ? 'Completed' : 'Not completed'}</div>
	</div>
	<div class="flex flex-col">
		<div class="text-xl">{position}</div>
	</div>
</a>
