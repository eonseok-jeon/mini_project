import LevelIcon from '@/app/_assets/Levelcon';
import {
  container,
  descriptionStyle,
  iconContainer,
  iconWrapper,
  labelStyle,
  logoImg,
  priceWrapper,
  titleStyle,
} from './style.css';
import ClassroomIcon from '@/app/_assets/Classroom';
import CalendarIcon from '@/app/_assets/CalendarIcon';

export interface CourseCardProps {
  enrollType: number;
  isFree: boolean;
  logoFileUrl: string;
  shortDescription: string;
  title: string;
}

export default function CourseCard({ enrollType, isFree, logoFileUrl, shortDescription, title }: CourseCardProps) {
  const price =
    enrollType === 4 ? '구독' : enrollType === 0 && !!isFree ? '무료' : enrollType === 0 && !isFree ? '유료' : '에러';

  return (
    <article>
      <div className={container}>
        <div className={labelStyle}>{'label'}</div>
        <p className={titleStyle}>{title}</p>
        <p className={descriptionStyle}>{shortDescription}</p>
        <div className={iconContainer}>
          <img src={logoFileUrl} alt={`${title}-logo`} className={logoImg} />
          <div className={iconWrapper}>
            <LevelIcon />
            <span>난이도 : 미설정</span>
          </div>
          <div className={iconWrapper}>
            <ClassroomIcon />
            <span>수업 : 온라인</span>
          </div>
          <div className={iconWrapper}>
            <CalendarIcon />
            <span>기간 : 무제한</span>
          </div>
        </div>
      </div>
      <p className={priceWrapper}>{price}</p>
    </article>
  );
}
