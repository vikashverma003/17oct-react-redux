import React, {Component} from 'react'


function RenderChild({person}) {

        return (<h4>The id is {person.id} and name is {person.name}</h4>);

}

export default RenderChild