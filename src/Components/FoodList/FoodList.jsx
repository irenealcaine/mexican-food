import React, { useEffect, useState } from 'react'
import FoodItem from '../FoodItem/FoodItem'
import axios from 'axios';
import './FoodList.css'
import { exampleFoodList } from '../../Utils/example';
import Input from '../Input/Input';
import Pagination from '../Pagination/Pagination';

const FoodList = () => {

  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(import.meta.env.VITE_FOOD_URL, {

  //         headers: {
  //           "X-RapidAPI-Host": import.meta.env.VITE_FOOD_HOST,
  //           "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
  //         },
  //       });

  //       setRecipes(response.data);

  //     } catch (error) {
  //       console.error("Error al obtener datos:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //example reponse

  useEffect(() => {
    setRecipes(exampleFoodList)
  }, [])

  const filteredRecipes = recipes.filter(recipe => {
    return (
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      &&
      (difficulty ? recipe.difficulty === difficulty : true)
    );
  });

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <>
      <Input
        onSearchChange={setSearchTerm}
        onDifficultyChange={setDifficulty}
      />
      {filteredRecipes.length !== 0
        ?
        <div className='food-list-container'>

          <section className='food-list'>
            {filteredRecipes.slice(startIndex, endIndex).map((plate) => (
              <FoodItem
                key={plate.id}
                plate={plate}
              />
            ))}
          </section>

          <Pagination
            totalItems={filteredRecipes.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        :
        <p className='no-recipes'>There's no recipes</p>
      }
    </>

  )
}

export default FoodList
