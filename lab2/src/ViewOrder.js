import React, { Component } from 'react';

class ViewOrder extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
    <div className="container">
        <div>
          <h4>{"Antal ordrar: " + [this.props.inputSalad.length]}</h4>
        </div>
        <div>
          <p id="test">{JSON.stringify(this.props.inputSalad.slice())}</p>
        </div>
    </div>
      )
    }
}

export default ViewOrder;