import React, { useEffect, useState } from "react";
import TodoList from "./todolist";
import TodoForm from "./todoform"
import Login from "./login";


function Home() {

	const [todos, setTodos] = useState([]);
	const [username, setUsername] = useState("");
	const [registeredUsers, setRegisteredUsers] = useState(["Marjorie", "Derek", "Daniel", "Nathan"]);

	const postTodo = (taskname) => {
		fetch("https://playground.4geeks.com/todo/todos/marjorie", {
			method: 'POST',
			body: JSON.stringify({
				"label": taskname,
				"is_done": false
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((jsonifiedData) => getFetch())
			.catch((err) => console.log(err))
	};


	const getFetch = () => {
		fetch("https://playground.4geeks.com/todo/users/marjorie")
			.then((res) => res.json())
			.then(jsonifiedData => setTodos(jsonifiedData.todos))
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		getFetch()
	}, []);


	const addTodo = (label) => {
		const newTodo = { id: Date.now(), label, is_done: false }; // Match structure with postTodo
		setTodos([...todos, newTodo]);
	};


	const toggleComplete = (todo) => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, is_done: !todo.is_done } : todo // updated for is_done
			)
		);

		if (toggleChecked) {
			fetch("https://playground.4geeks.com/todo/todos/" + id, {
				method: 'PUT',
				body: JSON.stringify({
					"label": todo.label,
					"is_done": true
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then((response) => response.json())
				.then((jsonifiedData) => getFetch())
				.catch((err) => console.log(err))

		}
	};



	const removeTodo = (id) => {

		const todoToDelete = todos.find(todo => todo.id === id);

		if (todoToDelete) {
			fetch("https://playground.4geeks.com/todo/todos/" + id, {
				method: 'DELETE'
			})
				.then(response => {
					if (response.ok) {
						setTodos(todos.filter(todo => todo.id !== id));
					} else {
						console.error("Failed to delete todo");
					}
				})
				.catch(err => console.error(err));
		}
	};



	return (
		<div>
			{username ? (
				<div className="ToDoList">
					<h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>To-Do List</h1>
					<TodoForm addTodo={addTodo} postTodo={postTodo} />
					<TodoList
						todos={todos}
						postTodo={postTodo}
						toggleComplete={toggleComplete}
						removeTodo={removeTodo}
					/>
				</div>
			)
				:
				<Login registered={registeredUsers} setUser={setUsername} />
			}
		</div>

	);

};

export default Home;
