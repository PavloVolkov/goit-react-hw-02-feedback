import React from 'react';
// import PropTypes from 'prop-types';

const FeedbackOptions = ({
  handleGoodValue,
  handleNeutralValue,
  handleBadValue,
}) => {
  return (
    <ul>
      <button onClick={handleGoodValue} value="good">
        good
      </button>
      <button onClick={handleNeutralValue} value="neutral">
        neutral
      </button>
      <button onClick={handleBadValue} value="bad">
        bad
      </button>
    </ul>
  );
};

// FeedBackButtons.propTypes = {};

export default FeedbackOptions;
