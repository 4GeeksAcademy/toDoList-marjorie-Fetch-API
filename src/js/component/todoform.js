import React, {useSate} from "react";

function TodoForm (props) {
  const [text, setText] = useSate ("");

  const HandleSubmit = (e) => {
    e.preventDefault ("");
    if (text.trim()) {
        props.addTodo(text);
        setText('');
      }
  }
  return (
    <form onSubmit={HandleSubmit}> 
    <input type="text" value={text} 
    onChange={(e) => setText (e.target.value)} placeholder="What is my next task?"/>
    <button type="submit"> Add to List </button>
    </form>

)
};

export default TodoForm;
