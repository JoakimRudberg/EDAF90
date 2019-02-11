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
    this.handleSaladRemove = this.handleSaladRemove.bind(this);
  }
  
    handleSaladSubmit(s){
      let temp = [...this.state.list]
      temp.push(s);
      this.setState({list: temp})
    }

    handleSaladRemove(s){
      let temp = [...this.state.list];
      let index = temp.indexOf(s);
      temp.splice(index, 1);
      this.setState({list: temp});
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
          <ViewOrder inputSalad={this.state.list} handleSaladRemove={this.handleSaladRemove}></ViewOrder>
        </div>
      </div>
    );
  }
}

export default App;
