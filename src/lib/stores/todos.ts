import { db } from '$lib/firebase';
import type Todo from '$lib/models/todo';
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { writable } from 'svelte/store';

type TodoStore = {
	todos: Todo[];
};

function createTodosStore() {
	const { subscribe, set, update } = writable<TodoStore>({ todos: [] });

	async function getTodos() {
		try {
			const todosRef = collection(db, 'todos');
			const todosSnap = await getDocs(todosRef);
			todosSnap.forEach((doc) => {
				update((todos) => {
					todos.todos.push(doc.data() as Todo);
					return todos;
				});
			});
		} catch (err: any) {
			console.error(err);
		}
	}

	async function addTodo(todo: Todo) {
		try {
			const todosRef = doc(db, 'todos');
			await setDoc(doc(todosRef, todo.id), todo);
			update((todos) => {
				todos.todos.push(todo);
				return todos;
			});
		} catch (err: any) {
			console.error(err);
		}
	}

	async function deleteTodo(id: string) {
		try {
			await deleteDoc(doc(db, 'todos', id));
			update((todosStore: TodoStore) => ({
				todos: todosStore.todos.filter((t) => t.id !== id)
			}));
		} catch (err: any) {
			console.error(err);
		}
	}

	async function updateTodo(todo: Todo) {
		try {
			const todoRef = doc(db, 'todos', todo.id);
			await updateDoc(todoRef, { ...todo, todo });
			update((todosStore: TodoStore) => ({
				todos: todosStore.todos.map((t) => (t.id === todo.id ? todo : t))
			}));
		} catch (err: any) {
			console.error(err);
		}
	}

	return {
		subscribe,
		set,
		update,
		getTodos,
		addTodo,
		deleteTodo,
		updateTodo,
		reset: () => set({ todos: [] })
	};
}

export const todosStore = createTodosStore();
