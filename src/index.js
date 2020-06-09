import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';
// import 'semantic-ui/dist/semantic.min.css';


// import { createStore } from './store'
import Backendless from 'backendless'
/* setting up the redux */

import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux'
//  import rootReducer from './SetReducer/rootReducer';

import reducer from './HindiReducer/Reducer';
import wishReducer from './HindiReducer/wishReducer';
import GetStoriesReducer from './HindiReducer/GetStoriesReducer';

import { isSameYear } from 'date-fns';
const masterReducer = combineReducers({

  name:reducer,
  wish:wishReducer,
  stories:GetStoriesReducer
});

//const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const store = createStore(masterReducer,{name:'samy',stories:'', wish:['danny', 'coder', 'sooner']},  composeWithDevTools(applyMiddleware(thunk)));


const rootElement = document.getElementById('root');


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);




Backendless.initApp('057B4BBA-41FE-52E2-FF04-2ACE042DC700', 'D008C0D7-9985-BB61-FFEA-E48502047900');




// ReactDOM.render(
//   <Provider store={createStore()}>
//     <App/>
//   </Provider>,
//   rootElement
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// import {createStore, combineReducers, applyMiddleware} from 'redux';

// const Mathreducer = (state={
//   result:1,
//   lastValues:[]

// }, action)=>{

//   switch(action.type){

//     case "ADD":

//     state = {
//       ...state,
//       result:state.result + action.payload,
//       lastValues:[...state.lastValues, action.payload]

//     };

//     break;

//     case "SUBTRACT":
//         state = {
//           ...state,
//           result:state.result - action.payload,
//           lastValues:[...state.lastValues, action.payload]


//         }
//     break;

    
//     case "MULTIPLY":
//         state = {
//           ...state,
//           result:state.result * action.payload,
//           lastValues:[...state.lastValues, action.payload]


//         }

//     break;

//   }

//   return state;
// };

// const UserReducer = (state={
//   age:11,
//   name:"sam",
//   lastValues:[]

// }, action)=>{

//   switch(action.type){

//     case "Set_Name":

//     //state = state + action.payload;
//     state = {
//       ...state,
//       name:action.payload
//       // result:state.result + action.payload,
//       // lastValues:[...state.lastValues, action.payload]

//     };

//     break;

//     case "Set_Age":
//         //state = state - action.payload;
//         state = {
//           ...state,
//           age:action.payload,
//           lastValues:[...state.lastValues, action.payload]
//           // result:state.result - action.payload,
//           // lastValues:[...state.lastValues, action.payload]


//         }
//     break;

    
//     case "MULTIPLY":
//         // state = state * action.payload;
//         state = {
//           ...state,
//           result:state.result * action.payload,
//           lastValues:[...state.lastValues, action.payload]


//         }

//     break;

//   }

//   return state;
// };

// // third reducer

// const ThirdReducer = (state={
//   number:11,
 
//   lastValues:[]

// }, action)=>{

//   switch(action.type){

//     case "Add_Number":

//     //state = state + action.payload;
//     state = {
//       ...state,
//      number:state.number + action.payload,
//       lastValues:[...state.lastValues, action.payload]
//       // result:state.result + action.payload,
//       // lastValues:[...state.lastValues, action.payload]

//     };

//     break;

//     case "Sub_Number":
//         //state = state - action.payload;
//         state = {
//           ...state,
//           number:state.number - action.payload,
//           lastValues:[...state.lastValues, action.payload]
//           // result:state.result - action.payload,
//           // lastValues:[...state.lastValues, action.payload]


//         }
//     break;

    
//     case "MULTIPLY":
//         // state = state * action.payload;
//         state = {
//           ...state,
//           number:state.number * action.payload,
//           lastValues:[...state.lastValues, action.payload]


//         }

//     break;

//   }

//   return state;
// };

// // middleware
// const myLogger =(store)=>(next)=>(action)=>{

//   console.log("Logged action", action);
//   next(action);
// };

// // for combining multiple middleware
// const store =createStore(combineReducers({Mathreducer, UserReducer, ThirdReducer}), {}, applyMiddleware(myLogger)); 

// // for getting the states
// store.subscribe(
// ()=>{
//   console.log("store updated", store.getState());
// });

// store.dispatch({

//   type:"ADD",
//   payload:10
// });

// store.dispatch({

//   type:"ADD",
//   payload:10
// });

// store.dispatch({

//   type:"SUBTRACT",
//   payload:2
// });

// store.dispatch({

//   type:"MULTIPLY",
//   payload:2
// });

// store.dispatch({

//   type:"Set_Age",
//   payload:2
// });

// store.dispatch({

//   type:"Add_Number",
//   payload:2
// });

// store.dispatch({

//   type:"Add_Number",
//   payload:2
// });


// store.dispatch({

//   type:"Sub_Number",
//   payload:2
// });



// store.dispatch({

//   type:"MULTIPLY",
//   payload:2
// });