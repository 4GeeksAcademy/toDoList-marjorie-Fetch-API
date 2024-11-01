import React from "react";

function TodoItems(props) {
    const { todo, taskComplete, removeTodo } = props;

    return (
        <lu>
            <button
                onClick={() => taskComplete(todo)}
            >Completed</button>
            {todo.label}
            <button onClick={() => {
                props.removeTodo(todo.id);
            }}>Remove</button>
        </lu>
    );
}

export default TodoItems;








