import { container, pageButton } from './pagination.css';

export default function Pagination() {
  return (
    <div className={container}>
      <button className={pageButton}>&lt;</button>
      <button className={pageButton}>1</button>
      <button className={pageButton}>2</button>
      <button className={pageButton}>3</button>
      <button className={pageButton}>4</button>
      <button className={pageButton}>5</button>
      <button className={pageButton}>&gt;</button>
    </div>
  );
}
