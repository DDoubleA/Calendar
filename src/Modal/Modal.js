import React, { useRef, useState } from "react";
import ModalPortal from "./Portal";
import { useDispatch } from "react-redux";
import './Modal.css';
import { insert } from "../app/todos.js";

const Modal = ({year, month, dw, day, close}) => {
  const [todotext, setTodoText] = useState("");
  const [todotime, setTodoTime] = useState("");
  
  const dispatch = useDispatch();
  let nextId = useRef(3);

  const onRemove = () => {
    setTodoText("");
    setTodoTime("");
  };

  const onChangetext = (e) => {
    setTodoText(e.target.value);
  };

  const onChangetime = (e) => {
    setTodoTime(e.target.value);
  };

  const addTodo = () => {
    if (todotext.length === 0) {
      alert("내용을 입력해주세요!");
      return;
    }
    dispatch(insert(todotext, todotime, year+"-"+month+"-"+day));
    nextId.current += 1;
    onRemove();
  };

  return (
    <ModalPortal>

      <div className = 'Background'>
        <div className= 'Content'>

            <div> {year+'.'+month+'.'+day+' ('+dw+')'} </div>

            <div> TIME </div>
            <input type="time"
            value = {todotime} 
            onChange = {onChangetime}/>

            <div> WORK</div>
            <input 
            type="text"
            value = {todotext} 
            onChange = {onChangetext}/>
            <div>

            <button onClick={addTodo}> add </button>
            <button onClick={close}> cancle </button>
            </div>

         </ div>
      </div>
      
    </ModalPortal>
  );
};

export default Modal;