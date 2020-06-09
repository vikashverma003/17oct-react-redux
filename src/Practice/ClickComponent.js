import React, {Component} from 'react'
import UpdateComponent from './withCounter'

class ClickComponent extends Component{

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
            {this.state.data}
            
            {/* <button onClick={()=>this.clickCount()}>{this.state.count}Click me</button> */}
            {/* <button onClick={()=>this.clickCount()}>{this.state.count}Click me</button> */}

            <button onClick={this.clickCount}>{count}Click me {this.props.name}</button>
            
            </div>);
    }


}

export default UpdateComponent(ClickComponent) 