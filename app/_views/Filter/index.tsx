'use client';

import { FILTER_DATA } from './constants';
import { container, wrapper, labelStyle, dataList, chip, activeChip } from './style.css';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const getQueryKey = (label: string) => {
  switch (label) {
    case '가격':
      return 'price';
    case '유형':
      return 'type';
    case '진행 방식':
      return 'method';
    case '분야':
      return 'field';
    case '난이도':
      return 'level';
    case '언어':
      return 'language';
    default:
      return 'filter';
  }
};

export default function Filter() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    const filters: { [key: string]: string[] } = {};
    // searchParams.forEach((value, key) => filters[key].push(value));
    searchParams.forEach((value, key) => {
      filters[key] = filters[key] ? [...filters[key], value] : [value];
    });
    setSelectedFilters(filters);
  }, [searchParams]);

  const handlePriceFilter = (queryLabel: string, item: string) => {
    const currentQuery = selectedFilters[queryLabel] || [];
    const newQuery = currentQuery.includes(item) ? currentQuery.filter((cur) => cur !== item) : [...currentQuery, item];
    setSelectedFilters((prev) => ({ ...prev, queryLabel: newQuery }));

    const newQueryParams = new URLSearchParams(searchParams.toString());
    newQueryParams.delete(queryLabel);
    newQuery.forEach((item) => newQueryParams.append(queryLabel, item));
    const newURL = `${pathName}?${newQueryParams}`;
    window.history.pushState({}, '', newURL);
  };

  const isActive = (label: string, item: string) => selectedFilters[label]?.includes(item);

  return (
    <ol className={container}>
      {FILTER_DATA.map(({ label, data }) => (
        <li key={`${label}${data[0]}`} className={wrapper}>
          <label className={labelStyle}>{label}</label>
          <div className={dataList}>
            {data.map((item) => {
              const queryLabel = getQueryKey(label);
              return (
                <button
                  key={item}
                  onClick={() => handlePriceFilter(queryLabel, item)}
                  className={`${chip} ${isActive(queryLabel, item) ? activeChip : ''}`}>
                  {item}
                </button>
              );
            })}
          </div>
        </li>
      ))}
    </ol>
  );
}
