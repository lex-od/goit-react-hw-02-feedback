import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

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
        // Вариант 1
        // const totalFeedback = this.countTotalFeedback();
        // return totalFeedback
        //     ? Math.round((this.state.good / totalFeedback) * 100)
        //     : 0;

        return (
            Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0
        );
    }

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.handleLeaveFeedback}
                    />
                </Section>

                <Section title="Statistics">
                    {totalFeedback ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={totalFeedback}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification message="No feedback given" />
                    )}
                </Section>
            </>
        );
    }
}

export default App;
