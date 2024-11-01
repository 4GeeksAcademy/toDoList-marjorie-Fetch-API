import React from "react";

import TodoItems from "./todoitems"


function TodoList(props) {

   return (
      <ul>
         {props.todos.map(todo =>
            <TodoItems
               key={todo.id}
               todo={todo}
               toggleComplete={props.toggleComplete}
               removeTodo={props.removeTodo} />
         )
         }
      </ul>


   );
}

export default TodoList;


