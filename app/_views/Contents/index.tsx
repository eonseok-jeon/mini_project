'use client';

import { useQuery } from '@tanstack/react-query';
import CourseCard from './components/CourseCard';
import Pagination from './components/Pagination';
import { contentCounts, courseCardWrapper } from './style.css';

const CONTENT_COUNTS = 121;

export default function Contents() {
  const queryParams = new URLSearchParams({
    filter_conditions:
      '%7B%22%24and%22%3A%5B%7B%22title%22%3A%22%25%25%22%7D%2C%7B%22%24or%22%3A%5B%7B%22status%22%3A2%7D%2C%7B%22status%22%3A3%7D%2C%7B%22status%22%3A4%7D%5D%7D%2C%7B%22%24or%22%3A%5B%5D%7D%2C%7B%22is_datetime_enrollable%22%3Atrue%7D%5D%7D',
    sort_by: 'created_datetime.desc',
    offset: '0',
    count: '12',
  });

  const { data } = useQuery({
    queryKey: ['courses-data'],
    queryFn: async () => {
      const res = await fetch(`api/?${queryParams.toString()}`);
      const result = await res.json();

      const data = result.data.courses.map((item) => ({
        enrollType: item.enroll_type,
        isFree: item.is_free,
        title: item.title,
        shortDescription: item.short_description,
        logoFileUrl: item.logo_file_url,
      }));

      return data;
    },
  });

  console.log(data);

  return (
    <section>
      <p className={contentCounts}>전체 {CONTENT_COUNTS}개</p>
      <div className={courseCardWrapper}>
        {data?.map((data) => <CourseCard key={`${data.title}${data.shortDescription}`} {...data} />)}
      </div>
      <Pagination />
    </section>
  );
}
