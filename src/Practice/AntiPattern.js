import React from 'react'

function AntiPattern(){

    const names = ["bruce", "sam", "john", "tin", "sam"];
    // if we dont have id in the array then
    const nameList = names.map((person, index)=><h4 key={index}>Here the index is {index} and person is {person}</h4>);

return (<div>{nameList}</div>);


}

export default AntiPattern