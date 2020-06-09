import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


class AddProduct extends Component{

    constructor(props){
        super(props);

        this.onAdd=this.onAdd.bind(this);
    }

    onAdd(e){
        e.preventDefault();
        this.props.onAdds(this.nameInput.value,this.priceInput.value);
        this.nameInput.value="";
        this.priceInput.value="";
    }
  
    render(){
       
        return (<div>
            
            <form onSubmit={this.onAdd}>
                <input placeholder="name" ref={nameInput=>this.nameInput=nameInput} />
                <input placeholder="price" ref={priceInput=>this.priceInput=priceInput} />
                <input type="submit" />
            </form>
        
        </div>)

    }
}

export default AddProduct;