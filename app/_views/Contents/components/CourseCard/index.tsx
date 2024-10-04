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
import { DataType } from '../../types';
import Image from 'next/image';

export interface CourseCardProps {
  enroll_type: number;
  is_free: boolean;
  logo_file_url: string;
  short_description: string;
  title: string;
}

export default function CourseCard({ enroll_type, is_free, logo_file_url, short_description, title }: DataType) {
  const price = enroll_type === 4 ? '구독' : enroll_type === 0 && !!is_free ? '무료' : '유료';

  return (
    <article>
      <div className={container}>
        <div className={labelStyle}>{'label'}</div>
        <p className={titleStyle}>{title}</p>
        <p className={descriptionStyle}>{short_description}</p>
        <div className={iconContainer}>
          <Image src={logo_file_url} alt={`${title}-logo`} className={logoImg} />
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
