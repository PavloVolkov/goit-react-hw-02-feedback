import React from 'react';
// import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedBacks }) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
      </ul>
      <div>
        <div>
          total:
          {total}
        </div>
        <div>
          Positive feedback:
          {positiveFeedBacks}%
        </div>
      </div>
    </>
  );
};

// Statistics.propTypes = {};

export default Statistics;
