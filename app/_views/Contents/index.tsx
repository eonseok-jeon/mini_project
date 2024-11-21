'use client';

import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import CourseCard from './components/CourseCard';
import Pagination from './components/Pagination';
import { contentCounts, courseCardWrapper } from './style.css';
import { useEffect, useState } from 'react';
import fetchCourses from './api';
import { type FilterType, useFilter } from '@/app/_contexts/FilterProvider';
import type { DataType, QueryData } from './types';
import { useSearchParams } from 'next/navigation';

export default function Contents() {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const { filter, handleSaveFilter } = useFilter();

  useEffect(() => {
    const titleFilters = searchParams.getAll('title')[0]; // URL 쿼리에서 `price` 값만 가져옴
    const priceFilters = searchParams.getAll('price'); // URL 쿼리에서 `price` 값만 가져옴

    if (!priceFilters) return;

    handleSaveFilter({
      title: titleFilters,
      price: priceFilters,
    });
  }, [handleSaveFilter, searchParams]);

  const { data } = useQuery<QueryData, Error, QueryData, (string | number | FilterType)[]>({
    queryKey: ['courses-data', currentPage, filter],
    queryFn: () => fetchCourses(currentPage, filter),
    placeholderData: keepPreviousData,
  });

  const maxPage = Math.floor((data?.courseCount || 0) / 20) + 1;

  useEffect(() => {
    if (currentPage > maxPage) setCurrentPage(maxPage);
    else if (currentPage < maxPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ['courses-data', nextPage, filter],
        queryFn: () => fetchCourses(nextPage, filter),
      });
    }
  }, [currentPage, maxPage, queryClient, filter]);

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
      <p className={contentCounts}>전체 {data?.courseCount || 0}개</p>
      <div className={courseCardWrapper}>
        {data?.data.map((data: DataType) => <CourseCard key={`${data.title}${data.short_description}`} {...data} />)}
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
