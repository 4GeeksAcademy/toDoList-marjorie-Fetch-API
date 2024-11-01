import React from "react";

function TodoItems(props) {
    const { todo, toggleComplete, removeTodo } = props;

    return (
        <lu>
            <button
                onClick={() => props.toggleComplete(todo)}
            >Completed</button>
            {todo.label}
            <button onClick={() => {
                props.removeTodo(todo.id);
            }}>Remove</button>
        </lu>
    );
}

export default TodoItems;








