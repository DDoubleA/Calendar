import React from 'react'
import Todos from '../Todo/Todo.js'
import './Memo.css'
import ModalPortal from "../Modal/Portal.js";
import Modal from "../Modal/Modal.js";

class Memo extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            isOpen:false
          };
      }

      handleClicked = () => {
        let wasOpen = this.state.isOpen
        this.setState({
            isOpen: !wasOpen
        });
      }


    render() {
      return (
        <div className='memo'>
            <div className='selected'>
                {this.props.dw+"ㅤ"}
                {this.props.day}
            </div>
            <div className='memos'>
                <Todos/>
            </div>
            <div className='buttons'>
                <button className='button' onClick={this.handleClicked}>
                    Add
                </button>
                <button className='button'>
                    Clear All
                </button>
                <ModalPortal year ={this.props.year} month = {this.props.month} dw = {this.props.dw} day ={this.props.day} isOpen={this.state.isOpen} close = {this.handleClicked}>
                  {this.state.isOpen && <Modal year ={this.props.year} month = {this.props.month} dw = {this.props.dw} day ={this.props.day} isOpen={this.state.isOpen} close = {this.handleClicked} />}
                </ModalPortal>
                {/* <MyModal ariaHideApp={false} year ={this.props.year} month = {this.props.month} dw = {this.props.dw} day ={this.props.day} isOpen={this.state.isOpen} close = {this.handleClicked}/> */}
                
            </div>
        
          
        </div>
        
      );
    }
  }
  
  export default Memo