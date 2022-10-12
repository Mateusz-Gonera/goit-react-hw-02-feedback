import OptionsCSS from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const liRender = options.map(option => {
    return (
      <li key={option} className={OptionsCSS.item}>
        <button onClick={onLeaveFeedback} className={OptionsCSS.button}>
          {option}
        </button>
      </li>
    );
  });
  return <ul className={OptionsCSS.list}>{liRender}</ul>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  //   onLeaveFeedback: PropTypes.func.isRequired,
};
