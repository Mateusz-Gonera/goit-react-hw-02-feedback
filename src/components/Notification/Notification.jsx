import NotificationCSS from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <p className={NotificationCSS.paragraph}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
