'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import CourseCard from './components/CourseCard';
import Pagination from './components/Pagination';
import { contentCounts, courseCardWrapper } from './style.css';
import { useEffect, useState } from 'react';
import fetchCourses from './api';
import { useFilter } from '@/app/_contexts/FilterProvider';

export default function Contents() {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();
  const { filter } = useFilter();

  const { data } = useQuery({
    queryKey: ['courses-data', currentPage, filter],
    queryFn: () => fetchCourses(currentPage, filter),
  });

  const maxPage = Math.floor(data?.courseCount / 20) + 1;

  useEffect(() => {
    if (currentPage < maxPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ['courses-data', nextPage, filter],
        queryFn: () => fetchCourses(nextPage, filter),
      });
    }
  }, [currentPage, maxPage, queryClient]);

  const handleClickPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleClickNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  };

  const handleClickNowPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <p className={contentCounts}>전체 {data?.courseCount}개</p>
      <div className={courseCardWrapper}>
        {data?.data.map((data) => <CourseCard key={`${data.title}${data.shortDescription}`} {...data} />)}
      </div>
      <Pagination
        currentPage={currentPage}
        maxPage={maxPage}
        onClickPreviousPage={handleClickPreviousPage}
        onClickNextPage={handleClickNextPage}
        onClickNowPage={handleClickNowPage}
      />
    </section>
  );
}
