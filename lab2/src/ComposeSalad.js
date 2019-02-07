import React, { Component } from 'react';

class ComposeSalad extends Component {
    constructor(props) {
        super(props);
        this.state = {foundation: '', protein: [], extra: [], dressing: ''};
    
        this.handleFoundationChange = this.handleFoundationChange.bind(this);
        this.handleProteinChange = this.handleProteinChange.bind(this);
        this.handleExtraChange = this.handleExtraChange.bind(this);
        this.handleDressingChange = this.handleDressingChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFoundationChange(event) {
        this.setState({foundation: event.target.value});
    }

    handleProteinChange(event){
        let newState;
        if (this.state.protein.indexOf(event.target.name)>-1){
            newState = this.state.protein.filter(protein => protein !== event.target.name)
        } else {
            newState = this.state.protein;
            newState.push(event.target.name);
        }
        this.setState({protein: newState})
    }

    handleExtraChange(event){
        this.setState({extra: event.target.value});
    }

    handleDressingChange(event) {
        this.setState({dressing: event.target.value});
    }
    
    handleSubmit(event) {
        alert('Your salad was submitted: ' + this.state.foundation + " " + this.state.protein +  " " + this.state.extra + " "+ this.state.dressing);
        event.preventDefault();
        //buildSalad();
    }

    buildSalad(){
        
    }
    
    render() {
      const inventory = this.props.inventory;
      if (!inventory) {
        alert("inventory is undefined in ComposeSalad");
      }
      let foundations = Object.keys(inventory).filter(name => inventory[name].foundation);
      let proteins = Object.keys(inventory).filter(name => inventory[name].protein);
      let extras = Object.keys(inventory).filter(name => inventory[name].extra);
      let dressings = Object.keys(inventory).filter(name => inventory[name].dressing);
      return (
        <form className="container" onSubmit={this.handleSubmit}>
        <h4>Välj bas</h4>
                <select value={this.state.foundation} onChange={this.handleFoundationChange}>
                    {foundations.map(name => (<option key={name} value={name}>{name + " +" + inventory[name].price + " kr"}</option>))}
                </select>
            <h4>Välj protein</h4>
                <ul> 
                    {proteins.map(name => (<li key={name}><input onChange={this.handleProteinChange} type="Checkbox" value={name} id="check"></input>{" " + name + " +" + inventory[name].price + " kr"}</li>))}
                </ul>
            <h4>Välj extra</h4>
                <ul>
                    {extras.map(name => (<li key={name}><input onChange={this.handleExtraChange} type="Checkbox" value={name}></input>{" " + name + " +" + inventory[name].price + " kr"}</li>))}
                 </ul>
            <h4>Välj dressing</h4>
                <select value={this.state.dressing} onChange={this.handleDressingChange}>
                    {dressings.map(name => (<option key={name} value={name}>{name + " +" + inventory[name].price + " kr"}</option>))}
                </select>  
            <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Lägg till sallad
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  
                >
                  Stäng fönstret
                </button>
            </div>
        </form>
      );
    }
  }
      
  export default ComposeSalad;