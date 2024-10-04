import FilterProvider from './_contexts/FilterProvider';
import Contents from './_views/Contents';
import Filter from './_views/Filter';
import SearchArea from './_views/SearchArea';

export default function Home() {
  return (
    <FilterProvider>
      <SearchArea />
      <Filter />
      <Contents />
    </FilterProvider>
  );
}
