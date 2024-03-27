const Pagination = ({ page, pageSize, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <section className="container flex items-center justify-center mx-auto my-8">
      <button
        className={`px-2 py-1 mr-2 transition-all border  rounded ${
          page > 1
            ? 'border-gray-300 hover:ring-2 opacity-100 hover:ring-offset-1 hover:ring-gray-300'
            : 'opacity-70 cursor-not-allowed'
        } `}
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </button>
      <span className="mx-2">
        Page {page} of {totalPages}
      </span>
      <button
        className={`px-2 py-1 ml-2 transition-all border border-gray-300 rounded ${
          page === totalPages
            ? 'opacity-70 cursor-not-allowed'
            : 'hover:ring-2 hover:ring-offset-1 hover:ring-gray-300'
        } `}
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </section>
  );
};

export default Pagination;
