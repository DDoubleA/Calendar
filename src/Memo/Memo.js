import React, { useState } from 'react'
import Todos from '../Todo/Todo.js'
import './Memo.css'
import ModalPortal from "../Modal/Portal.js";
import Modal from "../Modal/Modal.js";
import { useSelector } from "react-redux";

function Memo(props) {
  const [isOpen,setIsOpen] = useState(false);
  const todos = useSelector((state) => state.todos);
  console.log(todos)

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
            <Todos todos = {todos}/>
        </div>

        <div className='buttons'>

            <button className='button' onClick={handleClicked}>
                Add
            </button>

            <button className='button'>
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