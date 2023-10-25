import React from 'react';

function Pagination({ currentPage, maxPage, onPageChange }) {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= maxPage) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="pagination">
      <button
        className="arrow pagi-button"
        id="prevPage"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        ← <span className="nav-text">PREV</span>
      </button>
      <div className="pages">
        {Array.from({ length: maxPage }, (_, index) => (
          <div
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </div>
        )
        )}
      </div>
      <button
        className="arrow pagi-button"
        id="nextPage"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <span className="nav-text">NEXT</span> →
      </button>
    </div>
  );
}

export default Pagination;
