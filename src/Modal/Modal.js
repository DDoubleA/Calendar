import React from "react";
import ModalPortal from "./Portal";
import './Modal.css';

const Modal = ({ year, month, dw, day, isOpen, close}) => {
  return (
    <ModalPortal>

      <div className = 'Background'>
        <div className= 'Content'>

            <div> {year+'.'+month+'.'+day+' ('+dw+')'} </div>
            <div> TIME </div>
            <input type="time"/>
            <div> WORK</div>
            <input type="text"/>
            <div>
            <button> add </button>
            <button onClick={close}> cancle </button>
            </div>

         </ div>
      </div>
      
    </ModalPortal>
  );
};

export default Modal;