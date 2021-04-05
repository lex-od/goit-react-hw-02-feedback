import PropTypes from 'prop-types';
import css from './Notification.module.scss';

const Notification = ({ message }) => (
    <p className={css.notification}>{message}</p>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;
