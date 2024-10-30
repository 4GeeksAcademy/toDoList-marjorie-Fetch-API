import React, { useState } from "react";

function Login (props) {
   const [usernameInput, setUsernameInput]= useState ("");
   const [pwInput, setPwInput]= useState ("");

   const handleLogin = () => {
    let res = props.registered.find ((user) => user == usernameInput);
    if (res) props.setUser (res);
    else if (res == undefined || res == "undefined") {
        alert("The user is not register!"); }

   }


   return (
    <div className="">
        <input placeholder="Username" onChange={(e) => setUsernameInput(e.target.value)} />

        <input placeholder="Password" onChange={(e) => setPwInput(e.target.value)}/>
        
        <button onClick={handleLogin}>Submit </button>
    </div>
);
};




export default Login;
