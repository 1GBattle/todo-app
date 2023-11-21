<script lang="ts">
	import TodoCard from './todoCard.svelte';

	const todos = [
		{
			title: 'Buy milk',
			completed: false,
			id: '1'
		},
		{
			title: 'Buy eggs',
			completed: false,
			id: '2'
		},
		{
			title: 'Buy bread',
			completed: false,
			id: '3'
		},
		{
			title: 'Buy butter',
			completed: false,
			id: '4'
		},
		{
			title: 'Buy cheese',
			completed: false,
			id: '5'
		},
		{
			title: 'Buy ham',
			completed: false,
			id: '6'
		},
		{
			title: 'Buy bacon',
			completed: false,
			id: '7'
		},
		{
			title: 'Buy sausage',
			completed: false,
			id: '8'
		},
		{
			title: 'Buy tomatoes',
			completed: false,
			id: '9'
		},
		{
			title: 'Buy potatoes',
			completed: false,
			id: '10'
		},
		{
			title: 'Buy onions',
			completed: false,
			id: '11'
		},
		{
			title: 'Buy garlic',
			completed: false,
			id: '12'
		},
		{
			title: 'Buy apples',
			completed: false,
			id: '13'
		},
		{
			title: 'Buy oranges',
			completed: false,
			id: '14'
		},
		{
			title: 'Buy bananas',
			completed: false,
			id: '15'
		},
		{
			title: 'Buy grapes',
			completed: false,
			id: '16'
		},
		{
			title: 'Buy strawberries',
			completed: false,
			id: '17'
		},
		{
			title: 'Buy raspberries',
			completed: false,
			id: '18'
		},
		{
			title: 'Buy blueberries',
			completed: false,
			id: '19'
		},
		{
			title: 'Buy blackberries',
			completed: false,
			id: '20'
		},
		{
			title: 'Buy cherries',
			completed: false,
			id: '21'
		},
		{
			title: 'Buy peaches',
			completed: false,
			id: '22'
		},
		{
			title: 'Buy pears',
			completed: false,
			id: '23'
		},
		{
			title: 'Buy plums',
			completed: false,
			id: '24'
		}
	];
</script>

<div class="p-4 flex flex-col gap-8">
	{#each todos as todo}
		<TodoCard {todo} />
	{/each}
</div>

<style>
</style>
