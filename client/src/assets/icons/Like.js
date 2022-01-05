import React from 'react';
import PropTypes from 'prop-types';

const Like = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 407 356"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M371.072 181.319L203.487 348.904L35.9031 181.319C-4.32093 141.095 -4.32094 75.8794 35.9031 35.6554C76.1271 -4.56862 141.343 -4.56863 181.567 35.6554L199.952 54.0401L203.487 57.5757L207.023 54.0401L225.408 35.6554C265.632 -4.56862 330.848 -4.56862 371.072 35.6554C411.296 75.8794 411.296 141.095 371.072 181.319Z"
        stroke="#ffffff"
        strokeWidth="30"
      />
    </svg>
  );
};

Like.propTypes = {
  color: PropTypes.string,
};

export default Like;
