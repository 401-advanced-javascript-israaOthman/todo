import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate,currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
      <ul className='pagination'>
          <li className='page-item'>
            <a onClick={ pageNumbers.length != currentPage ? () => paginate(currentPage++): () => paginate(currentPage)} href='!#' className='page-link'>
              Next
            </a>
          </li>
          <li  className='page-item'>
            <a onClick={currentPage > 1 ? () => paginate(currentPage--): () => paginate(currentPage)} href='!#' className='page-link'>
              Previous
            </a>
          </li>
      </ul>
    </nav>
  );
};

export default Pagination;