import React, { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
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
        <Section title="one header"></Section>
        <Section title="second header"></Section>
      </div>
    );
  }
}
