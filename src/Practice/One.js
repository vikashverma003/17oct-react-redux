import React, {Component} from 'react'
import Two from './Two';

// function One(){


//     return (<div>dsbsdj</div>);
// }



/*class One extends Component{

    constructor(){
        super();
        this.state = {

            data:"fsfsd"
        }


    }

handleData = (event)=>{

    this.setState({

        data:event.target.value

    })
}


changeContent = (e)=>{


    this.setState({
        data: "content has been chnaged "
    });
}


    render(){

        return (<div>
            <input type="text" value={this.state.data} onChange ={this.handleData}/>

            <button onClick= {this.changeContent}>Click me</button>

            <h1>{this.state.data}</h1>



        </div>);
    }
} */


// for displaying the array list 

/*function One(){

    // const name = ["sdf", "ere", "qwqwqw", "aasas"];

    // const nameList = name.map((names, i)=><h2 key={i}>{i}{names}</h2>);

    const name = [{

        id:1,
        name: "same",
        age:23
    },
    {

        id:2,
        name: "rrsame",
        age:23
    },

    {

        id:3,
        name: "wwsame",
        age:23
    }

    ];

    const nameList = name.map(person=><Two person={person}/>);

        return (<div>{nameList}</div>);
}*/

// for counting the number

class One extends Component{

    constructor(){

        super();
        this.state = {count:0}
        this.handleCount=this.handleCount.bind(this);

    }


    // handleCount(){

    //     this.setState({ count:this.state.count+2});

           
        
    // }

    // handleCount=()=>{

    //     this.setState({ count:this.state.count+2});
           
        
    // }

    handleCount(){

        this.setState({ count:this.state.count+2});
           
        
    }


    render(){
        return (<div><h2>{this.state.count}</h2>
        
        {/* <button onClick = {()=>this.handleCount()}>Count me</button> */}

        {/* <button onClick = {this.handleCount}>Count me</button> */}

        <button onClick = {this.handleCount}>Count me</button>
        
        </div>);
    }

}



export default One