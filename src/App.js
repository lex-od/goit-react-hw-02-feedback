import { Component } from 'react';
import css from './styles/App.module.scss';
import FeedbackOptions from './components/FeedbackOptions';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleLeaveFeedback(feedback) {
        console.log(feedback);
    }

    render() {
        return (
            <>
                <h1 className={css.feedbackTitle}>Please leave feedback</h1>
                <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.handleLeaveFeedback}
                ></FeedbackOptions>
                <h2 className={css.statisticsTitle}>Statistics</h2>
                {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
            </>
        );
    }
}

export default App;
