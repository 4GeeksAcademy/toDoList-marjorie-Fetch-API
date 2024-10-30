import React, {useState} from "react";

function TodoForm (props) {
  const [text, setText] = useState ("");

  const HandleSubmit = (e) => {
    e.preventDefault ();
    if (text.trim()) {
        props.addTodo(text);
        setText('');
      }
  }
  return (
 
    <div id="format"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <form style={{margin: "5hv"}} onSubmit={HandleSubmit}> 
    <input  type="text" value={text} 
    onChange={(e) => setText (e.target.value)} placeholder="What is my next task?"/>
    <button className="button" type="submit"> Add to List </button>
    </form>
    </div>


)
};

export default TodoForm;
