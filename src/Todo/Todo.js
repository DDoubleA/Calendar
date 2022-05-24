import React from 'react'
import { useDispatch } from "react-redux";
import './Todo.css'
import { changeInput, remove } from "../app/todos.js";


function Todo(props) {
  let id, text, time, date;
  ({id, text, time, date } = props.todo)
  const dispatch = useDispatch();
  

  const deletetodo = (id) => {
    dispatch(remove(id));
  };

  const inputedit = (id) => {
    const text = window.prompt("asdf", "asdf")
    dispatch(changeInput(id, text));
    console.log(text);
  }

  return (
    <div>
        <span> {time} </span>
        <span> {text} </span>
        <button onClick={() => inputedit(id)}> edit </button>
        <button onClick={() => deletetodo(id)}> delete </button>
    </div>
  );
}

function Todos (props) {
  return (
  <div>
      {props.todos.map((todo,idx) => (<Todo key = {idx} todo = {todo}></Todo> ))}
  </div>
  
  );
}
  
  export default Todos