import React from 'react'
import './FoodItem.css'

const FoodItem = ({ plate }) => {
  return (
    <div className='food-item'>
      <img src={plate.image} alt={plate.title} />
      <p>{plate.title}</p>
    </div>
  )
}

export default FoodItem
