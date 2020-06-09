import React, {Component} from 'react'

import Form3 from './Form3'

class FormCompo extends Component{

    // constructor(props){

    //     super(props);

    //     this.state = {

    //         data:"samrt"
    //     }

    // }

    state = {
        fields:{}
    }

    onSubmit = fields=>{
      //  console.log("App Compo", fields);
      this.setState({fields});
    }


    render(){

        return(<div><h3>Contact us </h3>
            <Form3 onSubmit = {fields=>this.onSubmit(fields)}/>
            <p>{JSON.stringify(this.state.fields, null, 2)}</p>
            </div>)
    }




}

export default FormCompo