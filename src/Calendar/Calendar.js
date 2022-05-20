import React from 'react'
import './Calendar.css'
import c from 'calendar'

function Day(props) {
    if(typeof props.value == "number" && props.value != 0){
        return (
            <button 
            className="day" 
            onClick={ props.onClick}
            >
            {props.value}
            </button>
        );
    }
    else{
        return (
            <div 
            className="day_nn" 
            >
              {props.value == 0 ? "em" : props.value}
            </div>
          );
        
    }
}

function Week(props) {
    return <div className='week'>
    {
        props.value.map((day,idx) => {
            return <Day
                key = {idx}
                value = {day}
                onClick = {() => props.onClick(day)}
            />
        }
        )
    }
    </div>
}

class Calendar extends React.Component {
    constructor(props) {
        super(props);
      }
    

    renderweek(week,idx){
        return <Week
        key ={idx}
        value = {week}
        onClick = {(day) => this.props.changeday(day) }
        />
    }
    

    rendermonth(month){
        const months = ["JANUARY","FEBURARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
        return <div className='month'>
            <div>
                {months[month]}
            </div>
            <div >
                <button onClick={()=> this.props.changemonth(-1)}> {"<"} </button>
                <button onClick={()=> this.props.changemonth(+1)}> {">"} </button>
            </div>

        </div>
    }

    render() {
        const days = ["SUN", "MON", "TUE", "WES", "THU", "FRI", "SAT"]
        let cal = new c.Calendar();
        let m = cal.monthDays(this.props.year, this.props.month);

        return (
            <div className='calendar'>   
                <div className='upperbar'>
                    <div className='year'>
                        {this.props.year}
                    </div>
                    {this.rendermonth(this.props.month)}
                </div>

                <Week value = {days}/>

                {
                m.map((week, idx) =>{
                    return (this.renderweek(week,idx))
                })
                }

            </div>
             
        );
    }
  }
  
  export default Calendar