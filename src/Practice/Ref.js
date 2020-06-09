import React, {Component} from 'react'

class Ref extends Component{

    constructor(props){
        super(props);
            this.state = {
                message: " "
            }
        
        this.changeMessage = this.changeMessage.bind(this);
    }
    changeMessage(e){
            this.setState({
                message: e.target.value
                // message:"sam sam sam sam sams sam samsam s"
            })    
    }

        render(){
            return (<div>
                {/* <input type="text"  value={this.state.message} onChange ={this.changeMessage()} /> */}
                    <h3>{this.state.message}</h3>

            </div>);
        }
    }

export default Ref