import React from 'react'
import './Pagination.css'

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
    <div className='pagination'>
      {currentPage > 1 &&
        <button className='prev-button' onClick={() => previousPage()}>Previous</button>
      }

      <div className="pages">
        {pages.map((page) => (
          <div
            className={`page-number ${page === currentPage && "current"}`}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </div>
        ))}
      </div>

      {currentPage < totalFilteredPages &&
        <button className='next-button' onClick={() => nextPage()}>Next</button>
      }
    </div>
  )
}

export default Pagination
