import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange]);

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, totalPages, onPageChange]);

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 bg-primary text-white rounded disabled:opacity-50"
        aria-label="Перейти на первую страницу"
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </button>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 bg-primary text-white rounded disabled:opacity-50"
        aria-label="Перейти на предыдущую страницу"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <span className="font-main font-bold px-4 py-2 mx-1">
        {currentPage} из {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 bg-primary text-white rounded disabled:opacity-50"
        aria-label="Перейти на следующую страницу"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 bg-primary text-white rounded disabled:opacity-50"
        aria-label="Перейти на последнюю страницу"
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </button>
    </div>
  );
};

export default React.memo(Pagination);
