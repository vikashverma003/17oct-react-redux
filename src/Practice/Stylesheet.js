import React from 'react'
import './myStyle.css'

// function Stylesheet(){

//     return (
//     <div>
//         <h1 className='primary'>Here is styled compo</h1>
//         </div>
//     );

// }

function Stylesheet(props){

    let className = props.primary?'primary':''

    return (
    <div>
        <h1 className={`${className} font-xl`}>Here is styled compo</h1>
        </div>
    );

}


export default Stylesheet