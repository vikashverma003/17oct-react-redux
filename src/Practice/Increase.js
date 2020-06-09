import React, {Component} from 'react'

class Increase extends Component{


    constructor(){

        super();

        this.state = {

            count:0
        }
    }

    // clickCount(){

    // this.setState({count:this.state.count +1})
    // }

    clickCount = (event)=>{

        this.setState({count:this.state.count +1})
        }

        clickCount1 = (event)=>{

            this.setState({count:this.state.count +1})
            }
    render(){


        return (<div>

            {this.state.count}
            {/* <button type="button" onClick = {()=>this.clickCount()}>Click me{this.state.count}</button> */}

            <button type="button" onClick = {this.clickCount}>Click me{this.state.count}</button>

            <button type="button" onMouseOver = {this.clickCount1}>Click me{this.state.count}</button>

   
        </div>)
    }


}

export default Increase