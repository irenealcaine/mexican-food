import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Hero.css'

const Hero = () => {

  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_FOOD_URL, {

          headers: {
            "X-RapidAPI-Host": import.meta.env.VITE_FOOD_HOST,
            "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          },
        });

        const randomFood = Math.floor(Math.random() * response.data.length)
        setFood(response.data[randomFood]);
        console.log(randomFood, food);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <header className='hero'>

      <img src={food.image} alt={food.title} className='hero-image' />
      <div className='hero-content'>

        <h2>{food.title}</h2>
        <p>{food.difficulty}</p>
      </div>

    </header>
  )
}

export default Hero
