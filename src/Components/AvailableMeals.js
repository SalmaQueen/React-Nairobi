// Guys this a parent component, checkout it's child component 
// which is MealItem how it will recieve props
import React from 'react'
import MealItem from './MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];



const AvailableMeals=(props)=> {
    // I want to map through the data here so that I get all data in one card
    const meals= DUMMY_MEALS.map((item)=>(
        //jsx
        <>
        {/* //child component in use expecting props here */}
        <MealItem key={item.id} name={item.name} description={item.description} price={item.price}/> 
        </>
    ))
    return (
        <div>
            {meals}
            
        </div>
    )
}

export default AvailableMeals
