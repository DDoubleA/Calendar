import React from 'react';
import Calendar from './Calendar/Calendar.js';
import Memo from './Memo/Memo.js';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      year: 2022,
      month: 4,
      day: 20,
      dw:"FRI",
      isOpen:false
    };
  }

  changemonth = (value) => {
    let year = this.state.year;
    let month = this.state.month + value
    if(month < 0){
        year = year - 1
        month = 11
    }
    else if(month > 11){
        year = year + 1
        month = 0
    }
    this.setState({
        year : year,
        month : month
    });
  }

  changeday = (day, dw) => {
    let dws = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    this.setState({
        day : day,
        dw : dws[dw],
    });
  }

  render(){
    return (
      <div className="App">
        <Calendar year ={this.state.year} month = {this.state.month} changemonth = {this.changemonth} changeday = {this.changeday}/>
        <Memo id = "memo" year ={this.state.year} month = {this.state.month} dw = {this.state.dw} day ={this.state.day}/>
        
      </div>
    );
  }
}

export default App;
