import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");


  return (

    <div id="format" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ margin: "5hv" }} >
        <input type="text" value={text}
          onChange={(e) => setText(e.target.value)} placeholder="What is my next task?" />
        <button className="button"
          onClick={(e) => {
            e.preventDefault();
            props.postTodo(text); 
          }}
          type="text"> Add to List </button>

      </div>
    </div>


  )
};

export default TodoForm;
