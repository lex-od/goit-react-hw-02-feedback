import PropTypes from 'prop-types';
import css from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad }) => (
    <>
        <p className={css.statsItem}>Good: {good}</p>
        <p className={css.statsItem}>Neutral: {neutral}</p>
        <p className={css.statsItem}>Bad: {bad}</p>
    </>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
};

export default Statistics;
