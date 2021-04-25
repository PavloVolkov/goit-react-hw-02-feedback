import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      {children}
    </div>
  );
};

Section.propTypes = {};

export default Section;
