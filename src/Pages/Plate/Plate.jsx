import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { examplePlate } from '../../Utils/example';

const Plate = () => {
  const [plate, setPlate] = useState([]);

  // Change that when finished
  // const { id } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`https://the-mexican-food-db.p.rapidapi.com/${id}`, {

  //         headers: {
  //           "X-RapidAPI-Host": import.meta.env.VITE_FOOD_HOST,
  //           "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
  //         },
  //       });


  //       setPlate(response.data);
  //     } catch (error) {
  //       console.error("Error al obtener datos:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {

    setPlate(examplePlate)
  }, [])

  return (
    <>
      <h1>{plate.title}</h1>
      <p>{plate.description}</p>
      <p>{plate.difficulty}</p>
      <p>{plate.portion}</p>
      <p>{plate.time}</p>
      <img src={plate.image} alt={plate.title} />
      <ul>
        {plate?.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <ol>
        {plate?.method?.map((step, index) => (
          <li key={index}>{step[`Step ${index + 1}`]}</li>
        ))}
      </ol>
    </>
  )
}

export default Plate
