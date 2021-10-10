import React from 'react'
import './ChildProp.css'

const ChildProp = (props)=> {
    return (
        <div className="wrapper">
               <div className="card">
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            
        </div>

        </div>
     
    )
}

export default ChildProp
