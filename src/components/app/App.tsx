import React, { useState } from "react";
import Todo from "../../models/todo";
import "./App.css";

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [todo, setTodo] = useState<string>("");

	const onSaveClick = () => {
		if (todo) {
			const newTodo = new Todo(todo, todos.length);
			setTodos([...todos, newTodo]);
			setTodo("");
		}
	};

	return (
		<div className="container">
			<header>Todoz</header>
			<input
				onChange={(e) => {
					setTodo(e.target.value);
				}}
				value={todo}
			/>
			<button onClick={onSaveClick}>Save</button>
			<hr />
			<ul>
				{todos.map((todo) => {
					return (
						<li data-id={todo.id} key={todo.id}>
							{todo.content}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
