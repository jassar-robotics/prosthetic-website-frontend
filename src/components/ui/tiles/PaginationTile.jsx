import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Using react-icons

const PaginationTile = ({ totalItems, onAction }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / 9);

  const nextPage = () => {
    if (currentPage < totalPages) {
      const next = currentPage + 1;
      setCurrentPage(next);
      onAction && onAction(next);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const prev = currentPage - 1;
      setCurrentPage(prev);
      onAction && onAction(prev);
    }
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalItems, currentPage, totalPages]);

  return (
    <div className="w-fit flex justify-center items-center gap-3">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="cursor-pointer text-sm  px-2 py-1 rounded-l-full border  border-B200  hover:bg-B200 hover:border-B200 disabled:opacity-50"
      >
        <FaChevronLeft size={16} />
      </button>

      <span className="text-sm text-primary-text-color font-semibold">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className="cursor-pointer text-sm px-2 py-1  rounded-r-full border border-B200 hover:bg-B200 hover:border-B200 disabled:opacity-50"
      >
        <FaChevronRight size={16} />
      </button>
    </div>
  );
};

export default PaginationTile;
