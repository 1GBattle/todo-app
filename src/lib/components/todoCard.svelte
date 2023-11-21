<script lang="ts">
	export let todo: { title: string; completed: boolean; id: string };
</script>

<div class="shadow-lg p-2 flex justify-between items-center h-20 w-full cursor-pointer">
	<div class="flex flex-col">
		<div class="text-xl">{todo.title}</div>
		<div class="text-sm">{todo.completed ? 'Completed' : 'Not completed'}</div>
	</div>
	<div class="flex flex-col">
		<div class="text-xl">{todo.id}</div>
	</div>
</div>
