import React, {Component} from 'react'
import Two2 from './Two2';

function One1(){

    const name =[{

        id:1,
        name:'sdf',
        age:34
    },
    {

        id:12,
        name:'g',
        age:34
    },

    {

        id:4,
        name:'sdllf',
        age:34
    }
];

// const nameList = name.map(names=><Two2 names={names} />);

const name1 = ["sdbfjsdb", "sdgs", "fgdfg", "cvb"];
const nameList = name1.map(names=>names);

    

    return (<div>{nameList}</div>)



}
export default One1