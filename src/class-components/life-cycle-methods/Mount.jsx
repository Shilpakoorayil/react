import React, { Component } from 'react'

export default class Mount extends Component {
 componentDidMount(){
  console.log('Component mounted');
  
}

  render() {
    return (
      <div>
          <p>Component has been mounted</p>
      </div>
    )
  }
}