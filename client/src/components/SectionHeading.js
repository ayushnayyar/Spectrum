import React from 'react';
import PropTypes from 'prop-types';

import '../common/section-heading.scss';

const SectionHeading = ({ heading }) => {
  return <div className="SectionHeading">{heading}</div>;
};

SectionHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default SectionHeading;
