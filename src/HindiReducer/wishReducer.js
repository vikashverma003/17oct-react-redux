// this reducer will be used to pick wishes or updating the wishes

const wishReducer = (state= [], action)=>{

    // console.log(action)
    if(action.type ==='add_wish'){

        return [...state, action.payload]

    }

    return state;
}
export default wishReducer;