import React, { Component } from 'react';

class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentTime: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
            currentDate: new Date().toLocaleDateString('en-US',{weekday: 'long', day: "numeric", month: "long" })
        }
        this.updateTime()
    }
    updateTime(){
        setInterval(()=> {

            this.setState({
                currentTime: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
                currentDate: new Date().toLocaleDateString('en-US',{weekday: 'long', day: "numeric", month: "long" })
            })
        },1000)
    }

    render(){


        return(
            <div>
                <h1>{this.state.currentTime}</h1>
                 <p>{this.state.currentDate}</p>
            </div>
        )
    }
}
export default Clock;