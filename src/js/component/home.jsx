import React, {useEffect, useState} from "react";
import TodoList from "./todolist";
import TodoForm from "./todoform"
import Login from "./login";


function Home () {
     
	const [todos, setTodos] = useState ([]);
	const [username, setUsername] = useState ("");
	const [registeredUsers, setRegisteredUsers] = useState ([ "Marjorie", "Derek", "Daniel", "Nathan"]);

    const postTodo = (taskname) => {
		fetch("https://playground.4geek.com/todo/todos/marjorie", {
			method: 'POST', 
			body: JSON.stringify({
                "label": taskname,
                "is_done": false
            }),
			headers: {
			  'Content-Type': 'application/json'}
			})
		    .then((response) => response.json())
            .then((jsonifiedData) => getFetch())
            .catch((err) => console.log(err))
	};
	

	const getFetch = () => {
		fetch ("https://playground.4geeks.com/todo/users/marjorie")
		.then ((res) => res.json())
		.then (jsonifiedData => setTodos(jsonifiedData.todos))
        .catch((err) => console.log(err));
	}

	useEffect(() => { getFetch()
	}, []);


	const addTodo = (text) => {
		const newTodo = { id: Date.now(), text, completed: "false"};
		setTodos([...todos, newTodo]);
	};

	const toggleComplete = (id) => {
		setTodos(
		  todos.map(todo =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		  )
		);
	  };
	
	  const removeTodo = (id) => {
		setTodos(todos.filter(todo => todo.id !== id));
	  };
	
	  return (
    <div>
        { username ? (
	    <div className="ToDoList">
		  <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>To-Do List</h1>
		  <TodoForm addTodo={addTodo} postTodo={postTodo} />
		  <TodoList
		  todos={todos} postTodo={postTodo}
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
