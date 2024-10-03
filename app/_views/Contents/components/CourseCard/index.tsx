import LevelIcon from '@/app/_assets/Levelcon';
import {
  container,
  descriptionStyle,
  iconContainer,
  iconWrapper,
  labelStyle,
  priceWrapper,
  titleStyle,
} from './style.css';
import ClassroomIcon from '@/app/_assets/Classroom';
import CalendarIcon from '@/app/_assets/CalendarIcon';

export interface CourseCardProps {
  label: string;
  title: string;
  description: string;
  level: '미설정' | '입문' | '초급' | '중급' | '고급';
  classroom: '';
  duration: string;
  price: '무료' | '유료' | '구독';
}

export default function CourseCard({ label, title, description, level, classroom, duration, price }: CourseCardProps) {
  return (
    <article>
      <div className={container}>
        <div className={labelStyle}>{label}</div>
        <p className={titleStyle}>{title}</p>
        <p className={descriptionStyle}>{description}</p>
        <div className={iconContainer}>
          <div className={iconWrapper}>
            <LevelIcon />
            <span>난이도 : {level}</span>
          </div>
          <div className={iconWrapper}>
            <ClassroomIcon />
            <span>수업 : {classroom}</span>
          </div>
          <div className={iconWrapper}>
            <CalendarIcon />
            <span>기간 : {duration}</span>
          </div>
        </div>
      </div>
      <p className={priceWrapper}>{price}</p>
    </article>
  );
}
