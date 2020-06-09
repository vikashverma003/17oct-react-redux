import axios from 'axios';

// export const anotherName = (name)=>{
// return {
//     type:'CHANGE_NAME',
//     payload:name
// }

// }

// alt+sfit +dwn

// export const anotherName = ()=>{
// return (dispatch)=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(res2=>{
//         dispatch({type:'CHANGE_NAME', payload:res2[0].name})
//     })
// }

// }

// we can also wait for the sysync

export const anotherName = ()=>{
return async (dispatch)=>{ 
   const data=await fetch('https://jsonplaceholder.typicode.com/users')
  // const data=await fetch('http://localhost/dev_lie/public/api/getStories')
   const res2 =await data.json()

  // console.log("here is res2", res2.data[0].description);
   dispatch({type:'CHANGE_NAME', payload:res2[0].name})
  //dispatch({type:'CHANGE_NAME', payload: res2.data[0].description})
}

}
export const wishName = ()=>{

   return {

      type:'add_wish',
      payload:"wskjkjsjkvb"


   }

}

export const showStories=()=>{

return async (dispatch)=>{
    //const data=await fetch('http://localhost/dev_lie/public/api/getStories')
    const data=await fetch('https://app.prepsponsor.com/api/selectPackage/')
    const res2 =await data.json()
 
   //console.log("here is Stories", res2.data);
   console.log("here is Stories", res2.success);

  // dispatch({type:'getStories', payload: res2.data})
  dispatch({type:'getStories', payload: res2.success})
}

}
export const addStories=(cat)=>{

   return async (dispatch)=>{

      // const headers = {
      //    'Content-Type': 'application/json',
      //    'Authorization': 'JWT fefege...'
      //  }
   console.log("added stories", cat);
     axios.post('http://localhost/dev_lie/public/api/createHistory',cat)
      .then(response=>{console.log(response)})
      .catch(error=>{console.log(error)})
      //dispatch({type:'addStories', payload: res2})

   }
   
   }
