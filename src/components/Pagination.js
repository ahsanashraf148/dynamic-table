import paginationOptions from './PaginationOptions';

function Pagination({ currentPage, totalItems, rowsPerPage, paginate, setRowsPerPage, isPerPage = true }) {
    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(Number(event.target.value));
    };

    return (
        <div className="pagination">
            {isPerPage && (
                <div className="rows-per-page">
                    <label htmlFor="rows-per-page">Rows per page:</label>
                    <select id="rows-per-page" value={rowsPerPage} onChange={handleRowsPerPageChange}>
                        {paginationOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            )}
            {Array.from({ length: Math.ceil(totalItems / rowsPerPage) }, (_, index) => (
                <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                    {index + 1}
                </button>
            ))}
        </div>
    );
}

export default Pagination;