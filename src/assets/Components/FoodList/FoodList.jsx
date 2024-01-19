import React, { useEffect, useState } from 'react'
import FoodItem from '../FoodItem/FoodItem'
import axios from 'axios';
import './FoodList.css'
import { exampleFoodList } from '../../../Utils/example';

const FoodList = () => {

  const [plates, setPlates] = useState([]);

  // Change that when finished

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(import.meta.env.VITE_FOOD_URL, {

  //         headers: {
  //           "X-RapidAPI-Host": import.meta.env.VITE_FOOD_HOST,
  //           "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
  //         },
  //       });


  //       setPlates(response.data);
  //       console.log(plates);
  //     } catch (error) {
  //       console.error("Error al obtener datos:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //example reponse

  useEffect(() => {
    setPlates(exampleFoodList)
    console.log(exampleFoodList)
  }, [])

  return (
    <section className='food-list'>
      {plates.map((plate) => (
        <FoodItem key={plate.id} plate={plate} />
      ))}
    </section>
  )
}

export default FoodList
