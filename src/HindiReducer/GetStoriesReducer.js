// this reducer will be used to pick wishes or updating the wishes
const initialState = {
    stories: []
  };

const storiesReducer = (state= [], action)=>{

    // console.log(action)
    if(action.type ==='getStories'){
        console.log("action clicked");

        return [...state]

    }
    if(action.type ==='addStories'){
        console.log("action added");

        /*return {...state,
            storie:action.payload
          };*/
          return {
            ...state,
            stories: [...state.stories, action.payload]
          };

    }       

    return state;
}
export default storiesReducer;