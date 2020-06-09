import React, {Component} from 'react'

import {connect} from 'react-redux'

import {anotherName, wishName,showStories,addStories} from '../HindiAction/myAction'
class ClassApp extends Component{

    constructor(props){
        super(props);

        this.state = {
                data: "data found",
                message:"field is input",
                story_id:'',
                user_id:''
            
        }
    }

    handleContent(){

        this.setState({

            data:"content has been chnaged"

        })


    }
   /* componentDidMount = async () => {
       const data= await this.props.showStories();
      };*/

      submitHandler=(event)=>{
        event.preventDefault();
        const data= {

            story_id:this.state.story_id,
            user_id:this.state.user_id
        }

        this.props.addStories(data);
        

      };
      
    handleChange = (name, val) => {
        this.setState({
        [name]: val
        });
    };
   


    render(){

        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick = {()=>this.handleContent()}>click me to see the magic</button>
                <h1>I am a compoReduc</h1>

                <h1>I am a compo</h1>
                <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" value={this.state.story_id} onChange={e=>{
                    this.handleChange('story_id', e.target.value)
                }} />
            </div>
            
            <div>
                <input type="text" value={this.state.user_id} onChange={e=>{
                    this.handleChange("user_id", e.target.value);
                }} />
            </div>

            <button type="submit">Submit</button>

       </form>




                
                </div>
        );


    }
}

const mapStateToProps= (state)=>{

    return {

        myname:state.name,
        mywish:state.wish

    }

}

// for updating the state

const mapDispatchToProps = (dispatch)=>{

    return {

        changeName:()=>{dispatch(
            
           anotherName()
        )},

        addWishes:()=>{dispatch(

            wishName()
        )},
        showStories:()=>{dispatch(
            
            showStories()
         )},
         addStories:data=>{dispatch(
            
            addStories(data)
         )}
    };


}



export default connect(mapStateToProps, mapDispatchToProps)(ClassApp);