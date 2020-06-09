import React from 'react'

import {connect} from 'react-redux'

import {anotherName} from '../HindiAction/myAction'

function UseApp(props){

    console.log(props);
    
    // UseApp is a compo not reducer

        return (<div>

            <h1>I am a compo {props.myname}</h1>

            <h1>I am a ooocompo000</h1>

            <button onClick={()=>{props.changeName()}}>Click me</button>

        </div>)
        
}

const mapStateToProps= (state)=>{

    return {

        myname:state.name

    }

}

// for updating the state

const mapDispatchToProps = (dispatch)=>{

    return {

        changeName:()=>{dispatch(



            
           anotherName()
        )}
    }


}



export default connect(mapStateToProps, mapDispatchToProps)(UseApp);