import React from 'react'
import RenderChild from './RenderChild';
// import RenderChild from './Practice/RenderChild'

function Rendering(){

    //const names = ["gd", "sdgs", "grte", "cvbcv"];

    const names = [
        {id:1,
        
        name:"ada",
        age:23
    },
    {id:2,
        
        name:"rada",
        age:323
    },
    {id:3,
        
        name:"yada",
        age:23
    }


    ];

   // const nameList = names.map(person=><h4>The id is {person.id} and name is {person.name}</h4>);

   // to avoid the error in the console we will use key 
   const nameList = names.map(person=><RenderChild key={person.id}  person ={person}/>);


    return (<div>{nameList} </div>);


}

export default Rendering