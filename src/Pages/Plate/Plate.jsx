import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { examplePlate } from '../../Utils/example';
import './Plate.css'

const Plate = () => {
  const [plate, setPlate] = useState([]);
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

        setPlate(response.data);
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
    <div className='plate'>
      <div className="plate-info">
        <img src={plate.image} alt={plate.title} />
        <div className="plate-text">

          <h1>{plate.title}</h1>
          <p>{plate.description}</p>
          <p>{plate.difficulty}</p>
          <p>{plate.portion}</p>
          <p>{plate.time}</p>
        </div>
      </div>
      <h2>Ingredients</h2>
      <ul>
        {plate?.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Steps</h2>
      <ol>
        {plate?.method?.map((step, index) => (
          <li key={index}>{step[`Step ${index + 1}`]}</li>
        ))}
      </ol>
    </div>
  )
}

export default Plate
