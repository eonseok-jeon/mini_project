export default function getPaginationRange(currentPage: number, maxPage: number) {
  const pages = [];
  let start = Math.max(1, currentPage - 3);
  let end = Math.min(maxPage, currentPage + 3);

  if (currentPage <= 4) {
    start = 1;
    end = Math.min(7, maxPage);
  } else if (currentPage >= maxPage - 3) {
    start = Math.max(maxPage - 6, 1);
    end = maxPage;
  }

  for (let i = start; i <= end; i++) pages.push(i);

  return pages;
}
