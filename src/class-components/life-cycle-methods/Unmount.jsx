import React, { Component } from 'react'

export default class Unmount extends Component {

    state={
        time:0
    }

    componentDidMount(){
        //start timer when the component mount
        this.timer =setInterval(() =>{
         this.setState(prevState => ({
            time:prevState.time+1
         }))
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Timer cleared up.");
        
    }
  render() {
    return (
      <div>
        <h1>Time:{this.state.time} seconds</h1>
      </div>
    )
  }
}
