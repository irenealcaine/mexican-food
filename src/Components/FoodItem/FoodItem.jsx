import React from 'react'
import './FoodItem.css'
import { Link } from 'react-router-dom'

const FoodItem = ({ plate }) => {
  return (
    <Link to={`/${plate.id}`} className={`food-item`}>
      <img src={plate.image} alt={plate.title} className={`${plate.difficulty}`} />
      <p>{plate.title}</p>
    </Link>
  )
}

export default FoodItem
