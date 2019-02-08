import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import inventory from './inventory.ES6';
import ComposeSalad from './ComposeSalad';
import ComposeSaladModal from "./ComposeSaladModal";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {list: []};
    this.createSallad = this.createSallad.bind(this);
  }
    createSallad(f, p , e, d){
      let temp = this.state.list
      let ID = this.state.list.length;
      temp.push({id: ID, foundation: f, protein: p, extra: e, dressing: d});
      this.setState({list: temp});
  }
  
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>My Own Salad Bar</h1>
          <p>Here you can order custom made salads!</p> 
         </div>
        <div>
          <ComposeSaladModal handleNewSallad={this.handleNewSallad} inventory={inventory}/>
      </div>
    </div>
    );
  }
}

export default App;
