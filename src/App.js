import { Component } from 'react';
import css from './styles/App.module.scss';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleLeaveFeedback = feedback => {
        this.setState(actState => ({ [feedback]: actState[feedback] + 1 }));
    };

    countTotalFeedback() {
        return Object.values(this.state).reduce((summ, val) => summ + val, 0);
    }

    countPositiveFeedbackPercentage() {
        const totalFeedback = this.countTotalFeedback();
        return totalFeedback
            ? Math.round((this.state.good / totalFeedback) * 100)
            : 0;
    }

    render() {
        const { good, neutral, bad } = this.state;

        return (
            <>
                <h1 className={css.feedbackTitle}>Please leave feedback</h1>
                <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.handleLeaveFeedback}
                />
                <h2 className={css.statisticsTitle}>Statistics</h2>
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
            </>
        );
    }
}

export default App;
