import React from 'react';
import Calendar from './Calendar/Calendar.js';
import Memo from './Memo/Memo.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2022,
      month: 5,
      day: 20,
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
  changeday = (day) => {
    console.log(day)
    this.setState({
        day : day
    });
  }

  render(){
    return (
      <div className="App">
        <Calendar year ={this.state.year} month = {this.state.month} changemonth = {this.changemonth} changeday = {this.changeday}/>
        <Memo/>
      </div>
    );
  }
}

export default App;
