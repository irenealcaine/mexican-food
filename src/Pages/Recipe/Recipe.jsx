import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { examplePlate } from '../../Utils/example';
import './Recipe.css'

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://the-mexican-food-db.p.rapidapi.com/${id}`, {

          headers: {
            "X-RapidAPI-Host": import.meta.env.VITE_FOOD_HOST,
            "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          },
        });

        setRecipe(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  //example response

  // useEffect(() => {
  //   setPlate(examplePlate)
  // }, [])

  return (
    <div className='recipe'>
      <div className="recipe-info">
        <img src={recipe.image} alt={recipe.title} />
        <div className="recipe-text">

          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <p>{recipe.difficulty}</p>
          <p>{recipe.portion}</p>
          <p>{recipe.time}</p>
        </div>
      </div>
      <h2>Ingredients</h2>
      <ul>
        {recipe?.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Steps</h2>
      <ol>
        {recipe?.method?.map((step, index) => (
          <li key={index}>{step[`Step ${index + 1}`]}</li>
        ))}
      </ol>
    </div>
  )
}

export default Recipe
