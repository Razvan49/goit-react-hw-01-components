import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistic}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.stat_list}>
        {stats.map(el => {
          return (
            <li
              key={el.id}
              style={{ backgroundColor: getRandomHexColor() }}
              className={style.item}
            >
              <span className={style.label}>{el.label}</span>
              <span className={style.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistics;
