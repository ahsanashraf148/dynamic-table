import React from 'react';

function Pagination({ currentPage, totalItems, rowsPerPage, paginate, setRowsPerPage }) {
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
  };

  return (
    <div className="pagination">
      <div className="rows-per-page">
        <label htmlFor="rows-per-page">Rows per page:</label>
        <select id="rows-per-page" value={rowsPerPage} onChange={handleRowsPerPageChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      {Array.from({ length: Math.ceil(totalItems / rowsPerPage) }, (_, index) => (
        <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;