import React from 'react'

const Pagination = ({ filteredRecipes, itemsPerPage, currentPage, setCurrentPage }) => {

  const totalFilteredPages = Math.ceil(filteredRecipes.length / itemsPerPage);
  const pages = [];
  for (var i = 1; i <= totalFilteredPages; i++) {
    pages.push(i);
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>{currentPage > 1 &&
      <button onClick={() => previousPage()}>Previous</button>
    }
      {pages.map((page) => (
        <div
          className={`pageNumber`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </div>
      ))}
      {currentPage < totalFilteredPages &&
        <button onClick={() => nextPage()}>Next</button>
      }
    </div>
  )
}

export default Pagination
