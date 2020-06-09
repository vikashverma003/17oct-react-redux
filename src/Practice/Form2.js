import React , {Component} from 'react'

// function Form2(){

//     return (<div>sdgsd</div>);
// }


class Form2 extends Component{

    constructor(){

        super();

        this.state = {
            //data:"sdfsd"
            name:'',
            email:'',
            comment:''
        }
    }

    // clickHandler =(event)=>{
    //     this.setState({
    //         data:event.target.value
    //     })
    // }

    // clickHandler(){
    //     this.setState({
    //         data:"changed"
    //     })
    // }

    nameHandler = (event)=>{

        this.setState({

            name:event.target.value
        })
    }

    emailHandler = (event)=>{

        this.setState({

            email:event.target.value
        })
    }

    
    commentHandler = (event)=>{

        this.setState({

            comment:event.target.value
        })
    }

    submitHandler = (event) =>{

        alert(`${this.state.name} ${this.state.email} ${this.state.comment}`);
        event.preventDefault();
    }


    render(){

        return (<div>dfdsf

            <h3>{this.state.data}</h3>
            {/* <input type="text" value= {this.state.data} onChange={this.clickHandler} /> */}

            {/* <input type="text" value= {this.state.data} onChange={()=>this.clickHandler()} /> */}
            <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" value={this.state.name} onChange={this.nameHandler} />
            </div>
            
            <div>
                <input type="text" value={this.state.email} onChange={this.emailHandler} />
            </div>


            <div>
            <textarea value={this.state.comment} onChange={this.commentHandler} ></textarea>
            </div>

            <button type="submit">Submit</button>

       </form>
        </div>);
    }


}
export default Form2