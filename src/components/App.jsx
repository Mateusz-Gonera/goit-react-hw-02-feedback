import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let percentage = Math.floor(
      ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
    );
    if (isNaN(percentage)) {
      return 0;
    } else return percentage;
  };

  fooOnLeaveFeedback = () => {
    this.setState(state => {
      return { good: state.good + 1 };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
          padding: '20px 10px',
        }}
      >
        <Section title="one header">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.fooOnLeaveFeedback}
          />
        </Section>
        <Section title="second header">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
