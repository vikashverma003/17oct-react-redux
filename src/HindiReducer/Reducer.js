// const iState={

//     name:"ramesh",
//     wishes:['eat', 'code']
// } 

// this reducer  will be used to pick name only


// const reducer = (state= '', action)=>{

//     // console.log(action)
//     if(action.type ==='CHANGE_NAME'){

//         return {

//             ...state,

//             name:action.payload
//         }

//     }

//     return state;
// }
// export default reducer;

const reducer = (state= '', action)=>{

    // console.log(action)
    if(action.type ==='CHANGE_NAME'){

        return action.payload

    }

    return state;
}
export default reducer;