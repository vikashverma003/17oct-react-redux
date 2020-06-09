import React, {Component} from 'react'

class HoverComponent extends Component{


    constructor(){

        super();
    
        this.state= {
    
            data: "have to change ",
    
            count :0
        }
    }
    
    
    clicHandler(){
    
        this.setState({
    
            data:this.target.value
        })
    }
    
    // clickCount(){
    
    //     this.setState({
    
    //         count:this.state.count+2
    //     })
    // }
    
    
    clickCount = ()=>{
    
        this.setState(prevState=>{
    
            return {count:prevState.count+1}
        })
    }
    
render(){

    const {count} = this.state


    return (<div>
        <h3>{this.state.data}</h3>
        <button onMouseOver={this.clickCount}>Hover {count}on me</button>
       

    </div>);
}



}

export default HoverComponent