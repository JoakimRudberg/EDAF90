import React, { Component } from 'react'; 

class ViewOrder extends Component {

    render() {
      return (
    <div className="container">
        <div>
          <h4 id="r2">{"Antal ordrar: "+ this.props.inputSalad.length}</h4>
        </div>
        <div className="list-group">
         <ol id="orders">
          {this.props.inputSalad.map(s => 
            <li key={s} className='list-group-item clearfix' >{s.print()}<button type='button' className='btn btn-danger' onClick={() => this.props.handleSaladRemove(s)}>Ta bort sallad</button></li>)}
        </ol>
        </div>  
    </div>
      )
    }
}

export default ViewOrder;