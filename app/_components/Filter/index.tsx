import { FILTER_DATA } from './constants';
import { container, wrapper, labelStyle, dataList, chip } from './style.css';

export default function Filter() {
  return (
    <ol className={container}>
      {FILTER_DATA.map(({ label, data }) => (
        <li key={`${label}${data[0]}`} className={wrapper}>
          <label className={labelStyle}>{label}</label>
          <div className={dataList}>
            {data.map((item) => (
              <button key={item} className={chip}>
                {item}
              </button>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
