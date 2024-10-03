import SearchIcon from '@/app/_assets/SearchIcon';
import { container, icon, input } from './style.css';

export default function SearchArea() {
  return (
    <div className={container}>
      <SearchIcon className={icon} />
      <input type="text" placeholder="배우고 싶은 언어, 기술을 검색해 보세요" className={input} />
    </div>
  );
}
