import React from 'react'

import {connect} from 'react-redux'

import {anotherName, wishName,showStories} from '../HindiAction/myAction'

function CombineReduc(props){

  //  console.log(props);
  console.log("Heere is storeiesprops"+ props);
    
    // this is a component not a reducer 

   const wishList = props.mywish.map(item=>{

   return <h2>{item}</h2>

   })
       
        return (<div>

            <h1>I am a compo Reduc {props.myname}</h1>

            <h1>I am a compo and below is our wishes</h1>
           {wishList}

            <button onClick={()=>{props.changeName()}}>Click me</button>
            <button onClick={()=>{props.addWishes()}}>Add wish</button>
            <button onClick={()=>{props.showStories()}}>showStories</button>




        </div>)
        
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
         )}
    }


}



export default connect(mapStateToProps, mapDispatchToProps)(CombineReduc);