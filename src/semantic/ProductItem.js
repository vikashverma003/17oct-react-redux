import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


class ProductItem extends Component{

    constructor(props){
        super(props);

        this.state={
            isEdit:false
        }

        this.onDelete=this.onDelete.bind(this);
        this.onEdit=this.onEdit.bind(this);
        this.onEditSubmit=this.onEditSubmit.bind(this);


    }

    onDelete(){

        const {onDelete, name}=this.props
        onDelete(name);
    }

    onEdit(){
        this.setState({isEdit:true});
        //const {onDelete, name}=this.props
        //onEdit(name);
    }
    onEditSubmit(e){
        e.preventDefault();
       // console.log(this.nameInput.value, "Pirce", this.priceInput.value)
       this.props.onEditData(this.nameInput.value, this.priceInput.value, this.props.name);
       this.setState({isEdit:false});


    }
  
    render(props){
       
        const {name, price,onDelete}=this.props;
        return (<div>
            {
                this.state.isEdit?<div> <form onSubmit={this.onEditSubmit}>
                <input placeholder="name" ref={nameInput=>this.nameInput=nameInput} defaultValue={name} />
                <input placeholder="price" ref={priceInput=>this.priceInput=priceInput} defaultValue={price} />
                <input type="submit" />
            </form></div>:<div key={name}>
                <span>{name}</span>{`|`}<span>{price}</span>
                {`|`}<button type="button"  onClick={this.onDelete}>Delete</button>
                {`|`}<button type="button"  onClick={this.onEdit}>Edit</button>
    
                </div>
            }
       
        
        </div>)

    }
}

export default ProductItem;