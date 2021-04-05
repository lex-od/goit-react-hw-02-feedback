import PropTypes from 'prop-types';
import css from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
        <p className={css.statsItem}>Good: {good}</p>
        <p className={css.statsItem}>Neutral: {neutral}</p>
        <p className={css.statsItem}>Bad: {bad}</p>
        <p className={css.statsItem}>Total: {total}</p>
        <p className={css.statsItem}>
            Positive feedback: {positivePercentage}%
        </p>
    </>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
