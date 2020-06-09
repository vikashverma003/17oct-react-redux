import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';

const products=[{"name":"iphone", "price":8000},{"name":"nokia","price":9000}];
localStorage.setItem('products', JSON.stringify(products));

class ReactRouter extends Component{

    constructor(props){
        super(props);
        this.state={
            products:JSON.parse(localStorage.getItem('products'))
        };
        this.onDelete=this.onDelete.bind(this);
        this.onAdds=this.onAdds.bind(this);
        this.onEditData=this.onEditData.bind(this);
    }

    componentWillMount(){
        const products= this.getProducts();
        this.setState({products});
        console.log(products);
       
    }

    getProducts(){
        const products=this.state.products;
        return products;
       
    }

    onDelete(name){

        const products = this.getProducts();
        console.log("herrer is ",products);

        const filterProduct=products.filter(product=>{
            return product.name !==name;
        });
        this.setState({products:filterProduct});
        //console.log("del is ",filterProduct);


    }

    onAdds(name, price){
        const products=this.getProducts();
        products.push({name, price});

        this.setState({products});
        console.log(name, price);
    }

    onEditData(name, price, originalName){

        let products=this.getProducts();
        products=products.map(product=>{
        if(product.name==originalName){
            product.name=name;
            product.price=price;
            }
            return product;
        });
        this.setState({products});

    }
   
    render(){
       
        return (<div className="App"><h2>React router make crud !!!</h2>
        <h3>Add Products</h3>
        <AddProduct onAdds={this.onAdds} />
        <hr />
        <h3>Here is product manager</h3>
        {

        this.state.products.map(product=>{

        return (<ProductItem  key={product.name} {...product} onDelete={this.onDelete} onEditData={this.onEditData} />);
        })

        }
        
        </div>)
    }
}

export default ReactRouter;