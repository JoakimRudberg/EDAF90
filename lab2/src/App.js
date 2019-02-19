import React, { Component } from 'react';
import ComposeSalad from './ComposeSalad';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.js";
//import ComposeSaladModal from "./ComposeSaladModal";
import ViewOrder from "./ViewOrder";
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], inventory: {} };
    this.handleSaladSubmit = this.handleSaladSubmit.bind(this);
    this.handleSaladRemove = this.handleSaladRemove.bind(this);
  }

  componentDidMount() {
    let inventory = {};
    const URLres = ["foundations", "proteins", "extras", "dressings"];
    Promise.all(
      URLres.map(res => {
        const url = new URL(res, "http://localhost:8080/");
        return fetch(url, {
          method: "GET",
          headers: new Headers(),
          mode: "cors",
          cache: "default"
        })
          .then(res => res.json())
          .then(res => {
            Promise.all(
              res.map(key => {
                const url2 = new URL(key, url.toString() + "/");
                return fetch(url2, {
                  method: "GET",
                  headers: new Headers(),
                  mode: "cors",
                  cache: "default"
                })
                  .then(res => res.json())
                  .then(res => {
                    inventory = { ...inventory, [key]: res };
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
  }

  handleSaladRemove(s) {
    let temp = [...this.state.list];
    let index = temp.indexOf(s);
    temp.splice(index, 1);
    this.setState({ list: temp });
  }

  render() {
    const composeSaladElem = (params) => <ComposeSalad {...params} inventory={this.state.inventory} handleSaladSubmit={this.handleSaladSubmit} />;
    const viewOrderElem = (params) => <ViewOrder {...params} inputSalad={this.state.list} handleSaladRemove={this.handleSaladRemove} />;
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
