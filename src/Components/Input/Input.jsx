import React from 'react'
import './Input.css'

const Input = ({ onSearchChange, onDifficultyChange }) => {
  return (
    <div className='input-container'>
      <input type="text" name="" id="" placeholder='Search...' onChange={(e) => onSearchChange(e.target.value)} />
      <select onChange={(e) => onDifficultyChange(e.target.value)}>
        <option value="" hidden>Difficulty</option>
        <option value="">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  )
}

export default Input
