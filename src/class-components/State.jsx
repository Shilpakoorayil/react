import React, { Component } from 'react'

export default class State extends Component {
    //First initialize state
    constructor(){
        //constructor is used to initialize state of the component
        super();//inorder to invoke the parent
        this.state ={count:0};//initialize the value as zero
    }

    increment =() =>{
        this.setState({count:this.state.count +1})//setstate :inorder to update the state
}

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2><br />
        <button onClick = {this.increment}>+</button>
      </div>
    )
  }
}
