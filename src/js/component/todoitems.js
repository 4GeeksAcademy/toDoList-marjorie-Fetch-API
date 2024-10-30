import React from "react";

function TodoItems (props){
    const {todo, toggleComplete, removeTodo} = props;
 
    return (
        <lu> 
        <input style={{ display: 'flex', justifyContent: 'center'}} type="checkbox"  onChange={() => toggleComplete (todo.id)}/>
        {todo.text}
        <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </lu>

    );
}

export default TodoItems;








