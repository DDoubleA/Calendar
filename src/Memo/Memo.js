import React, { useState } from 'react'
import Todos from '../Todo/Todo.js'
import './Memo.css'
import ModalPortal from "../Modal/Portal.js";
import Modal from "../Modal/Modal.js";
import { useSelector, useDispatch } from "react-redux";
import { clearall } from "../app/todos.js";

function Memo(props) {
  const [isOpen,setIsOpen] = useState(false);
  const todos = useSelector((state) => state.todos);
  console.log(todos)

  const dispatch = useDispatch();
  

  const deleteall = (date) => {
    // console.log(date)
    dispatch(clearall(date));
  };

  const todaytodo = todos.filter((todo)=>{
    return todo.date == props.year+"-"+props.month+"-"+props.day})


  const handleClicked = () => {
    let wasOpen = isOpen
    setIsOpen(!wasOpen)
    };

  return (
    <div className='memo'>

        <div className='selected'>
            {props.dw+"ㅤ"}
            {props.day}
        </div>

        <div className='memos'>
            <Todos todos = {todaytodo}/>
        </div>

        <div className='buttons'>

            <button className='button' onClick={handleClicked}>
                Add
            </button>

            <button className='button' onClick={()=>deleteall(props.year+"-"+props.month+"-"+props.day)}>
                Clear All
            </button>

            <ModalPortal >
              {isOpen && <Modal year ={props.year} month = {props.month} dw = {props.dw} day ={props.day} isOpen={isOpen} close = {handleClicked} />}
            </ModalPortal>

        </div>
    
      
    </div>
    
  );
 }
  
  export default Memo