import React, {Component} from 'react'

// function Hello(){


//     return "hello there";

// }


// class Hello extends React.Component{


//     render(){

//         return (<div>
//           dksjfhj
//         </div>);
//     }
// }

/*const Hello = props =>{

// console.log()

return (<div>

    <h4>dsfdsfds a.k.a{props.name}</h4>

</div>);


} */
class Hello extends Component{
constructor(props) {
    super(props);
    
    this.state = {
       data: 'Initial data...',
       message: "dsfsdfds"
    }
    this.updateState = this.updateState.bind(this);

    this.updateMessage = this.updateMessage.bind(this);

 };

 updateState(e) {
    this.setState({data: e.target.value});
 }

 updateMessage(e) {
    this.setState({message: e.target.value});
 }

 render() {
    return (
       <div>
          <input type = "text" value = {this.state.data} 
             onChange = {this.updateState} />
          <h4>{this.state.data}</h4>

          <input type = "text" value = {this.state.message} 
             onChange = {this.updateMessage} />
          <h4>{this.state.message}</h4>
       </div>
    );
 }

}

export default Hello