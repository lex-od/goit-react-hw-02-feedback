import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <ul className={css.feedbackList}>
        {options.map(feedback => (
            <li key={feedback}>
                <button
                    onClick={() => onLeaveFeedback(feedback)}
                    className={css.feedbackButton}
                >
                    {feedback}
                </button>
            </li>
        ))}
    </ul>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
