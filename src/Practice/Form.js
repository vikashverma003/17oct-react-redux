import React, {Component} from 'react'

class Form extends Component{

    constructor(props){
        super(props);

        this.state = {
                data: "data found",
                message:"field is input"
            
        }
    }

    handleContent(){

        this.setState({

            data:"content has been chnaged"

        })


    }
    
    // fieldContent(e){

    //     this.setState({

    //         message:e.target.value

    //     })
    // }


    render(){

        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick = {()=>this.handleContent()}>click me to see the magic</button>
<br/><br/><br/>
                {/* <input type="text" value={this.state.message} onChange = {this.fieldContent}>
                    <h2>{this.state.message}</h2> */}

                     {/* <input type = "text" value = {this.state.message} 
               onChange = {this.fieldContent} />
            <h4>{this.state.message}</h4> */}
                
                </div>
        );


    }
}

export default Form