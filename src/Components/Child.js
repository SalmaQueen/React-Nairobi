import React from 'react'

const Child=(props)=> {
    return (
        <div>
            {/* This where you read the data of the the parent file */}
        <h1>{props.name}</h1>
            <p>{props.age}</p>
            <p>{props.height}</p>
        </div>
    )
}

export default Child
