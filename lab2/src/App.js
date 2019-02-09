import React, { Component } from 'react';
import logo from './logo.svg';
import inventory from './inventory.ES6';
import ComposeSalad from './ComposeSalad';
import ComposeSaladModal from "./ComposeSaladModal";
import ViewOrder from "./ViewOrder";
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {list: []};
    this.handleSaladSubmit = this.handleSaladSubmit.bind(this);
  }
  
    handleSaladSubmit(f, p , e, d){
      let temp = [...this.state.list]
      let ID = this.state.list.length;
      temp.push({OrderID: ID, foundation: f, protein: p, extra: e, dressing: d});
      this.setState({list: temp})
    }

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>My Own Salad Bar</h1>
          <p>Here you can order custom made salads! {this.state.list.foundation}</p> 
        </div>
        <div>
          <ComposeSalad inventory={inventory} handleSaladSubmit={this.handleSaladSubmit}/>
        </div>
        <div>
          <ViewOrder inputSalad={this.state.list}></ViewOrder>
        </div>
      </div>
    );
  }
}

export default App;
