import Contents from './_components/Contents';
import Filter from './_components/Filter';
import SearchArea from './_components/SearchArea';

export default function Home() {
  return (
    <>
      <SearchArea />
      <Filter />
      <Contents />
    </>
  );
}
