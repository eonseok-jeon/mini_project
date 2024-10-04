'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import CourseCard from './components/CourseCard';
import Pagination from './components/Pagination';
import { contentCounts, courseCardWrapper } from './style.css';
import { useEffect, useState } from 'react';

export default function Contents() {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['courses-data', currentPage],
    queryFn: async () => {
      const queryParams = new URLSearchParams({
        filter_conditions:
          '%7B%22%24and%22%3A%5B%7B%22title%22%3A%22%25%25%22%7D%2C%7B%22%24or%22%3A%5B%7B%22status%22%3A2%7D%2C%7B%22status%22%3A3%7D%2C%7B%22status%22%3A4%7D%5D%7D%2C%7B%22%24or%22%3A%5B%5D%7D%2C%7B%22is_datetime_enrollable%22%3Atrue%7D%5D%7D',
        sort_by: 'created_datetime.desc',
        offset: `${(currentPage - 1) * 20}`,
        count: '20',
      });

      const res = await fetch(`api/?${queryParams.toString()}`);
      const result = await res.json();

      const data = result.data.courses.map((item) => ({
        enrollType: item.enroll_type,
        isFree: item.is_free,
        title: item.title,
        shortDescription: item.short_description,
        logoFileUrl: item.logo_file_url,
      }));

      return { data, courseCount: result.data.course_count };
    },
  });

  const maxPage = Math.floor(data?.courseCount / 20) + 1;

  useEffect(() => {
    if (currentPage < maxPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ['courses-data', nextPage],
        queryFn: async () => {
          const queryParams = new URLSearchParams({
            filter_conditions:
              '%7B%22%24and%22%3A%5B%7B%22title%22%3A%22%25%25%22%7D%2C%7B%22%24or%22%3A%5B%7B%22status%22%3A2%7D%2C%7B%22status%22%3A3%7D%2C%7B%22status%22%3A4%7D%5D%7D%2C%7B%22%24or%22%3A%5B%5D%7D%2C%7B%22is_datetime_enrollable%22%3Atrue%7D%5D%7D',
            sort_by: 'created_datetime.desc',
            offset: `${(nextPage - 1) * 20}`,
            count: '20',
          });

          const res = await fetch(`api/?${queryParams.toString()}`);
          const result = await res.json();

          const data = result.data.courses.map((item) => ({
            enrollType: item.enroll_type,
            isFree: item.is_free,
            title: item.title,
            shortDescription: item.short_description,
            logoFileUrl: item.logo_file_url,
          }));

          return { data, courseCount: result.data.course_count };
        },
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
