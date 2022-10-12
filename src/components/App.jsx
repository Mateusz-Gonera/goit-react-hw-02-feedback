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
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  

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
          <FeedbackOptions options={Object.keys(this.state)} />
        </Section>
        <Section title="second header">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={4}
          />
        </Section>
      </div>
    );
  }
}
