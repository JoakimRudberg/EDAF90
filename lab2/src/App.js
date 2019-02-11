import React, { Component } from 'react';
import inventory from './inventory.ES6';
import ComposeSalad from './ComposeSalad';
//import ComposeSaladModal from "./ComposeSaladModal";
import ViewOrder from "./ViewOrder";
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
    const composeSaladElem = (params) => <ComposeSalad {...params} inventory={inventory} handleSaladSubmit={this.handleSaladSubmit}/>;
    const viewOrderElem = (params) => <ViewOrder {...params} inputSalad={this.state.list} handleSaladRemove={this.handleSaladRemove}/>;
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>My Own Salad Bar</h1>
          <p>Here you can order custom made salads! {this.state.list.foundation}</p> 
        </div>
        <Router>
        <div>
        
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to='compose-salad'>Komponera din egen sallad</Link>
              <Link className="nav-link" to='view-order'>Se din beställning</Link>
            </li>
          </ul>
          <Route path='/compose-salad' render={composeSaladElem}/>
          <Route path='/view-order' render={viewOrderElem}/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
