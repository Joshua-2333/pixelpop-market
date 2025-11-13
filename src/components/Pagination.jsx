// src/components/Pagination.jsx
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null; // no pagination needed

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => onPageChange(page)}
          aria-label={`Go to page ${page}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
