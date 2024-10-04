'use client';

import { useFilter } from '@/app/_contexts/FilterProvider';
import { FILTER_DATA } from './constants';
import { container, wrapper, labelStyle, dataList, chip, activeChip } from './style.css';
import { useState } from 'react';

export default function Filter() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const { handleSaveFilter } = useFilter();

  const handlePriceFilter = (item: string) => {
    setSelectedFilters((prevSelected) => {
      if (prevSelected.includes(item)) {
        // 이미 선택된 항목을 클릭했을 때: 선택 해제
        const newSelected = prevSelected.filter((filter) => filter !== item);
        handleSaveFilter({ price: newSelected });
        return newSelected;
      }
      if (!prevSelected.includes(item)) {
        // 새로운 항목 선택
        const newSelected = [...prevSelected, item];
        handleSaveFilter({ price: newSelected });
        return newSelected;
      }
    });
  };

  const isActive = (item: string) => selectedFilters.includes(item);

  return (
    <ol className={container}>
      {FILTER_DATA.map(({ label, data }) => (
        <li key={`${label}${data[0]}`} className={wrapper}>
          <label className={labelStyle}>{label}</label>
          <div className={dataList}>
            {data.map((item) => (
              <button
                key={item}
                onClick={() => handlePriceFilter(item)}
                className={`${chip} ${isActive(item) ? activeChip : ''}`}>
                {item}
              </button>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
