import React, { useEffect, useState } from 'react'
import FoodItem from '../FoodItem/FoodItem'
import axios from 'axios';
import './FoodList.css'
import { exampleFoodList } from '../../Utils/example';
import Input from '../Input/Input';

const FoodList = () => {

  const [plates, setPlates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState('');

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
  }, [])

  const filteredPlates = plates.filter(plate => {
    return (
      plate.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (difficulty ? plate.difficulty === difficulty : true)
    );
  });

  return (
    <>
      <Input
        onSearchChange={setSearchTerm}
        onDifficultyChange={setDifficulty}
      />
      <section className='food-list'>
        {filteredPlates.map((plate) => (
          <FoodItem key={plate.id} plate={plate} />
        ))}
      </section>
    </>

  )
}

export default FoodList
