import React, { Component } from 'react';
import Salad from "./Salad";


class ComposeSalad extends Component {
    constructor(props) {
        super(props);
        this.state = {foundation: '', protein: [], extra: [], dressing: '', salad: new Salad()};
    
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
    let newList = [...this.state.protein]
       if (!event.target.checked){
        newList = newList.filter(name => (name !== event.target.value));
       } else {
        newList.push(event.target.value);
       }
       this.setState({protein: newList});
    }

    handleExtraChange(event){
    let newList = [...this.state.extra]
        if (!event.target.checked){
         newList = newList.filter(name => (name !== event.target.value));
        } else {
         newList.push(event.target.value);
        }
        this.setState({extra: newList});
    }

    handleDressingChange(event) {
        this.setState({dressing: event.target.value});
    }
    
    handleSubmit(event) {
        if(event.target.checkValidity() === true){
            this.buildSalad();
            this.props.history.push('/view-order');
            event.target.classList.add("was-validated");
        }
        event.preventDefault();
    }

    buildSalad(){
        this.state.salad.addFoundation(this.state.foundation);
        this.state.protein.map(p => this.state.salad.addProtein(p));
        this.state.extra.map(e => this.state.salad.addExtra(e));
        this.state.salad.addDressing(this.state.dressing);

        this.props.handleSaladSubmit(this.state.salad);

        this.setState({
            foundation: '',
            protein: [],
            extra: [],
            dressing: '',
            salad: new Salad()
        });
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
        <div className="form-group">
            <form className="form-div" onSubmit={this.handleSubmit} noValidate >

                <h4>Välj bas</h4>
                    <select required className="form-control" value={this.state.foundation} onChange={this.handleFoundationChange}>
                        <option defaultValue value=""> -- Välj en bas -- </option>
                        {foundations.map(name => (<option key={name} value={name}>{name + " +" + inventory[name].price + " kr"}</option>))}
                    </select>
                    <div className="invalid-feedback">required, select one</div>    

                <h4>Välj protein</h4>
                    <ul> 
                        {proteins.map(name => (
                            <li key={name}>
                            <input 
                            type="Checkbox" 
                            name="protein"
                            value={name} 
                            checked={this.state.protein.includes(name)}
                            onChange={this.handleProteinChange} 
                            />
                            {" " + name + " +" + inventory[name].price + " kr"}</li>
                    
                        ))}
                    </ul>

                <h4>Välj extra</h4>
                    <ul> 
                        {extras.map(name => (
                            <li key={name}>
                            <input 
                            type="Checkbox" 
                            name="extra"
                            value={name} 
                            checked={this.state.extra.includes(name)}
                            onChange={this.handleExtraChange} 
                            />
                            {" " + name + " +" + inventory[name].price + " kr"}</li>
                    
                        ))}
                    </ul>
                
                <h4>Välj dressing</h4>
                    <select required className="form-control" value={this.state.dressing} onChange={this.handleDressingChange}>
                        <option defaultValue value=""> -- Välj en dressing -- </option>
                        {dressings.map(name => (<option key={name} value={name}>{name + " +" + inventory[name].price + " kr"}</option>))}
                    </select>  

                <div className="modal-footer">
                    <button
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                    >
                    Lägg till sallad
                    </button>
                </div>
            </form>
        </div>
      );
    }
  }
      
  export default ComposeSalad;