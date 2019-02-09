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
          <h4 id="r2">{this.getOrderSize()}</h4>
        </div>
        <div class="list-group">
         <ol id="orders">
         
        </ol>
        </div>  
    </div>
      )
    }

    getOrderSize(){
        let size = this.props.inputSalad.length;
        let sizeArray = "Antal ordrar: " + size;
        $("ol").append("<li class='list-group-item clearfix'>"+JSON.stringify(this.props.inputSalad.slice(size-1))+"<button type='button'>Ta bort</button</li>");

        return sizeArray;
    }

}

export default ViewOrder;