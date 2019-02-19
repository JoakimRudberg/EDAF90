import React, { Component } from 'react';
import ComposeSalad from './ComposeSalad';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.js";
//import ComposeSaladModal from "./ComposeSaladModal";
import ViewOrder from "./ViewOrder";
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Salad from './Salad';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], inventory: {} };
    this.handleSaladSubmit = this.handleSaladSubmit.bind(this);
    this.handleSaladRemove = this.handleSaladRemove.bind(this);
    this.sendToServer = this.sendToServer.bind(this);
  }

  sendToServer(){
     fetch("http://localhost:8080/orders/", {
      crossDomain: true,
      method: "POST",
      headers: {'Accept': 'application/json'},
      body: JSON.stringify(this.state.list)
    })
      .then(response => response.json())
      .then(list => alert(list))
      
      this.setState({list: []});
      window.localStorage.clear();
  }

  componentDidMount() {
    let list = JSON.parse(window.localStorage.getItem('orders'));
    list.forEach(s => Object.setPrototypeOf(s, Salad.prototype));
    this.setState({list: list});
    
    let inventory = {};
    const URLresources = ["foundations", "proteins", "extras", "dressings"];
    Promise.all(
      URLresources.map(resource => {
        const resourceURL = new URL(resource, "http://localhost:8080/");
        return fetch(resourceURL, {
          method: "GET",
          headers: new Headers(),
          mode: "cors",
          cache: "default"
        })
          .then(response => response.json())
          .then(response => {
            Promise.all(
              response.map(key => {
                const ingredientURL = new URL(key, resourceURL.toString() + "/");
                return fetch(ingredientURL, {
                  method: "GET",
                  headers: new Headers(),
                  mode: "cors",
                  cache: "default"
                })
                  .then(response => response.json())
                  .then(response => {
                    inventory = { ...inventory, [key]: response };
                  });
              })
            ).then(() => {
              this.setState({ inventory: inventory });
            });
          });
      })
    );
  }

  handleSaladSubmit(s) {
    let temp = [...this.state.list]
    temp.push(s);
    this.setState({ list: temp })
    window.localStorage.setItem('orders', JSON.stringify(temp));
  }

  handleSaladRemove(s) {
    let temp = [...this.state.list];
    let index = temp.indexOf(s);
    temp.splice(index, 1);
    this.setState({ list: temp });
    window.localStorage.setItem('orders', JSON.stringify(temp));
  }

  render() {
    const composeSaladElem = (params) => <ComposeSalad {...params} inventory={this.state.inventory} handleSaladSubmit={this.handleSaladSubmit} />;
    const viewOrderElem = (params) => <ViewOrder {...params} inputSalad={this.state.list} handleSaladRemove={this.handleSaladRemove} submitOrder={this.sendToServer} />;
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Min egna salladsbar</h1>
          <p>Här kan du beställa sallader! {this.state.list.foundation}</p>
        </div>
        <Router>
          <div>

            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to='compose-salad'>Komponera din egen sallad</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='view-order'>Se din beställning</Link>
              </li>
            </ul>
            <Route path='/compose-salad' render={composeSaladElem} />
            <Route path='/view-order' render={viewOrderElem} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
