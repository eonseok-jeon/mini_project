import { container, pageArrowButton, pageNumberActive, pageNumberButton } from './style.css';
import getPaginationRange from './utils/getPaginationRange';

interface PaginationProps {
  currentPage: number;
  maxPage: number;
  onClickPreviousPage: () => void;
  onClickNextPage: () => void;
  onClickNowPage: (page: number) => void;
}

export default function Pagination({
  currentPage,
  maxPage,
  onClickPreviousPage,
  onClickNextPage,
  onClickNowPage,
}: PaginationProps) {
  const paginationRange = getPaginationRange(currentPage, maxPage);

  return (
    <div className={container}>
      <button disabled={currentPage === 1} onClick={onClickPreviousPage} className={pageArrowButton}>
        &lt;
      </button>
      {paginationRange.map((page) => (
        <button
          key={page}
          className={page === currentPage ? `${pageNumberButton} ${pageNumberActive}` : pageNumberButton}
          onClick={() => onClickNowPage(page)}>
          {page}
        </button>
      ))}
      <button disabled={currentPage === maxPage} onClick={onClickNextPage} className={pageArrowButton}>
        &gt;
      </button>
    </div>
  );
}
