import React, { Component } from 'react'

export default class Props extends Component {
  render() {


    return (
      <div>
        <h1>Hi {this.props.name}</h1>
        <p>Designation{this.props.designation}</p>
      </div>
    )
  }
}

