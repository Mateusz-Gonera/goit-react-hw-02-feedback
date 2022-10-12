import PropTypes from 'prop-types';
import SectionCSS from './Section.module.css';

export const Section = ({ title }) => {
  return (
    <div className={SectionCSS.container}>
      <h2 className={SectionCSS.headerSecond}>{title}</h2>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
