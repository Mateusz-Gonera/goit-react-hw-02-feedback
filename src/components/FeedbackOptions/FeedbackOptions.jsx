import OptionsCSS from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={OptionsCSS.list}>
      {options.map(option => (
        <li key={option} className={OptionsCSS.item}>
          <button onClick={onLeaveFeedback} className={OptionsCSS.button}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  //   onLeaveFeedback: PropTypes.func.isRequired,
};
