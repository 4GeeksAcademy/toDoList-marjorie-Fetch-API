import React, {useState} from "react";
import TodoList from "./todolist";
import TodoForm from "./todoform"
import Login from "./login";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

function Home () {

	const [todos, setTodos] = useState ([]);
	const [username, setUsername] = useState ("");
	const [registeredUsers, setRegisteredUsers] = useState ([ "Marjorie", "Derek", "Daniel", "Nathan"]);


	

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
		  <TodoForm addTodo={addTodo} />
		  <TodoList
			todos={todos}
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
