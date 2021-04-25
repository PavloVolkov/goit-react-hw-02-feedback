import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Section from './Section/Section';
import NoFeedBackGiven from './noFeedBackGiven/NoFeedBackGiven';
import dataState from './state.json';
import totalFnc from './statisticFnc/total';
import positiveFeedBacksFnc from './statisticFnc/totalPositiveFeedBack';

class FeedBack extends React.Component {
  static defaultProps = {};

  // static propTypes = {
  //   dataState: this.propTypes,
  // };

  state = dataState;

  handleGoodValue = () => {
    this.setState(currentState => {
      return { good: currentState.good + 1 };
    });
  };
  handleNeutralValue = () => {
    this.setState(currentState => {
      return { neutral: currentState.neutral + 1 };
    });
  };
  handleBadValue = () => {
    this.setState(currentState => {
      return { bad: currentState.bad + 1 };
    });
  };

  countPositiveFeedbackPercentage = positiveFeedBacksFnc;
  countTotalFeedback = totalFnc;

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positiveFeedBacks = this.countPositiveFeedbackPercentage(
      good,
      neutral,
      bad,
    );

    return (
      <Section>
        <FeedbackOptions
          handleGoodValue={this.handleGoodValue}
          handleNeutralValue={this.handleNeutralValue}
          handleBadValue={this.handleBadValue}
        />
        {good ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedBacks={positiveFeedBacks}
          />
        ) : (
          <NoFeedBackGiven message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default FeedBack;
