'use client';

import { useState } from 'react';
import { container, pageArrowButton, pageNumberActive, pageNumberButton } from './style.css';
import getPaginationRange from './utils/getPaginationRange';

const MAX_PAGE = 20;

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRange = getPaginationRange(currentPage, MAX_PAGE);

  const handleClickPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleClickNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, MAX_PAGE));
  };

  return (
    <div className={container}>
      <button disabled={currentPage === 1} onClick={handleClickPreviousPage} className={pageArrowButton}>
        &lt;
      </button>
      {paginationRange.map((page) => (
        <button
          key={page}
          className={page === currentPage ? `${pageNumberButton} ${pageNumberActive}` : pageNumberButton}
          onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
      <button disabled={currentPage === MAX_PAGE} onClick={handleClickNextPage} className={pageArrowButton}>
        &gt;
      </button>
    </div>
  );
}
