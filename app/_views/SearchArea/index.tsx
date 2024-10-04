'use client';
import SearchIcon from '@/app/_assets/SearchIcon';
import { container, icon, input } from './style.css';
import { useFilter } from '@/app/_contexts/FilterProvider';
import { useEffect, useState } from 'react';

export default function SearchArea() {
  const { handleSaveFilter } = useFilter();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    handleSaveFilter({ title: debouncedTerm });
  }, [debouncedTerm, handleSaveFilter]);

  return (
    <div className={container}>
      <SearchIcon className={icon} />
      <input
        type="text"
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={input}
      />
    </div>
  );
}
