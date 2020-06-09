import React from 'react'

// function compo
// const NewPractice=(props)=>{

//     const {name, age} = props;

//     return(
//         <div>


//             skjjsd {props.name} and the age is {props.age}
//         </div>



//     );


// }

// class compo


class NewPractice extends React.Component{


    constructor(){

        super();

        this.state = {

            data:"sfaf",
            count:1
        }

    }

    clickHandler = (event)=>{

    this.setState({count: this.state.count+2 })

    }

    handleData = (e)=>{

        this.setState({data:e.target.value})


    }


        render(){


            return(
                
                <div>

                    <p>{this.state.data}</p>
                   <h1> kdsfkjdsbf {this.state.count}</h1>

                   <input type="text" value={this.state.data}  onChange={this.handleData}/>
                    <button type="button" onClick={this.clickHandler}>Click me</button>
                    
                    
                    </div>
            )
        }


}


export default NewPractice