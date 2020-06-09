import React, {Component} from 'react'

// function Form1(){

// return (
// <div>
//     <h1>Form1</h1>

// </div>);

// }




class Form1 extends Component{


    constructor(){

        super();
        this.state= {
    
            data :"",
            username:"",
            topic:""
        }
    }

    handleData = (event) =>{

        this.setState({data: event.target.value});
    }

    handleComment = (event)=>{

        this.setState({

            username:event.target.value
        });
    }

    handleTopic = (event)=>{

        this.setState({
            topic:event.target.value
        });
    }

    handleSubmit = event=>{

        alert(`${this.state.data} ${this.state.username} ${this.state.topic}`)

        event.preventDefault();

    }

    render(){

        return (<form onSubmit = {this.handleSubmit}><div><h3>Form1
            <input type="text" value={this.state.data} onChange={this.handleData} />
            
            </h3>
            </div>
            <div>
            <label>Username</label>
            <textarea value={this.state.username} onChange={this.handleComment}></textarea>

            </div>
            <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopic}>
            <option value="ag">ag</option>
            
            <option value="ag1">bg</option>
            
            <option value="ag2">cg</option>

            </select>
            </div>

            <button type="submit">Click me</button>

            </form>
            
            );
    }
}

export default Form1