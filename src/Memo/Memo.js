import React from 'react'
import './Memo.css'

class Memo extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
      return (
        <div className='memo'>
            <div className='selected'>
                {this.props.dw+"ㅤ"}
                {this.props.day}
            </div>
        
          
        </div>
        
      );
    }
  }
  
  export default Memo