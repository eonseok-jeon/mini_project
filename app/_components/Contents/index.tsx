import { DATA } from './constants';
import CourseCard from './CourseCard';
import { contentCounts, courseCardWrapper } from './style.css';

const CONTENT_COUNTS = 121;

export default function Contents() {
  return (
    <section>
      <p className={contentCounts}>전체 {CONTENT_COUNTS}개</p>
      <div className={courseCardWrapper}>
        {DATA.map((data) => (
          <CourseCard key={`${data.title}${data.label}`} {...data} />
        ))}
      </div>
    </section>
  );
}
