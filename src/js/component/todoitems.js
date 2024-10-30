import React from "react";

function TodoItems (){
    const {todo, toggleComplete, removeTodo} = props;
 
    return (
        <li style= {{ textDecoration: todo.completed ? "line-through" : "none" }}> 
        <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete (todo.id)}/>
        {todo.text}
        
        </li>

    );
}

export default TodoItems;








