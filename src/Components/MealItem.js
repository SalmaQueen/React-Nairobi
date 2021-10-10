import React from 'react'

const MealItem=(props)=> {
//  const price=`$${props.price}.toFixed(2)`

    return (
        <div className="bg-dark text-white text-center">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h6>{props.price}</h6>


            
        </div>
    )
}

export default MealItem
