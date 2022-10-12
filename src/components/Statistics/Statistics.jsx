import StatisticsCSS from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const Array = [
    [1, `Good: ${good}`],
    [2, `Neutral: ${neutral}`],
    [3, `Bad: ${bad}`],
    [4, `Total: ${total}`],
    [5, `Positive feedback: ${positivePercentage}`],
  ];
  const liRender = Array.map(([id, superString]) => {
    return (
      <li key={id} className={StatisticsCSS.item}>
        <span className={StatisticsCSS.paragraph}>{superString}</span>
      </li>
    );
  });
  return <ul className={StatisticsCSS.list}>{liRender}</ul>;
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
