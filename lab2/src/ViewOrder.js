import React, { Component } from 'react';
import $ from 'jquery';     

class ViewOrder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
    <div className="container">
        <div>
          <h4 id="r2">{"Antal ordrar: "+ this.props.inputSalad.length}</h4>
        </div>
        <div class="list-group">
         <ol id="orders">
          {this.props.inputSalad.map(s => 
            <li key={s} class='list-group-item clearfix' >{s.print()}<button type='button' className='btn btn-danger' onClick={() => this.props.handleSaladRemove(s)}>Ta bort sallad</button></li>)}
        </ol>
        </div>  
    </div>
      )
    }
}

export default ViewOrder;