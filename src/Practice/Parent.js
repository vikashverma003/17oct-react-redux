import React, {Component} from 'react'
// import Child from './Practice/Child'

class Parent extends Component{

    constructor(){
        super();
        this.state = {

            message:"here is elemne"
        }
        this.messageFunction = this.messageFunction.bind(this);
    }
    messageFunction(e){

        this.setState({
            message:e.target.value
        });
    }

    render(){

        return (<div>
            {/* <Child content = {this.state.message} contentFunction = {this.messageFunction} /> */}

        </div>);
    }
}

export default Parent 