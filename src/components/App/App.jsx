import { Component } from 'react';

import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';

import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (good / this.countTotalFeedback()) * 100;
  };

  render() {
    const options = Object.keys(this.state);

    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title={'Please leave feedback'} children>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section children>
          <>
            <h2>Statistics</h2>
            {this.countTotalFeedback() ? (
              <>
                <span>Good: {good}</span>
                <span>Neutral: {neutral}</span>
                <span>Bad: {bad}</span>
                <span>Total: {this.countTotalFeedback()}</span>
                <span>
                  Positive feedback: {this.countPositiveFeedbackPercentage()}%
                </span>
              </>
            ) : (
              <span>There is no feedback</span>
            )}
          </>
        </Section>
      </Container>
    );
  }
}
