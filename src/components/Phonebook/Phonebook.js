import React from 'react';
import './Phonebook.module.css';


class Phonebook extends React.Component {
  state = {
  contacts: [],
  name: ''
}

  increment = (e) => {
    this.setState((prevState) => {
      return {
        [e]: prevState[e] + 1,
      };
    });
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) =>
    Math.round((good * 100) / this.countTotalFeedback(good, neutral, bad));

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(good, neutral, bad);
    const positiveFeedPercentage = this.countPositiveFeedbackPercentage(good, neutral, bad);

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.increment}
          />
        </Section>

        <Section title="Statictics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedPercentage={positiveFeedPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Phonebook;
