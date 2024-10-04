'use client';

import { createContext, type ReactNode, useCallback, useContext, useState } from 'react';

type FilterType = {
  title?: string | null | undefined;
  price?: string[] | undefined;
};

interface FilterContextType {
  filter: FilterType;
  handleSaveFilter: (obj: FilterType) => void;
}

const FilterContext = createContext<FilterContextType>({
  filter: { title: null, price: [] },
  handleSaveFilter: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useFilter = () => {
  const contextValue = useContext(FilterContext);

  if (!contextValue) {
    throw new Error('FilterContext는 FilterProvider 내부에 있어야 함');
  }

  return contextValue;
};

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<FilterType>({ title: null, price: [] });

  const handleSaveFilter = useCallback((obj: FilterType) => {
    setFilter((prev) => ({ ...prev, ...obj }));
  }, []);

  const filterContextValue = {
    filter,
    handleSaveFilter,
  };

  return <FilterContext.Provider value={filterContextValue}>{children}</FilterContext.Provider>;
};

export default FilterProvider;
