import React from 'react';
import PropTypes from 'prop-types';

const People = ({ color }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="22px"
      height="22px"
      x="0px"
      y="0px"
      fill={color}
      viewBox="0 0 122.88 91.99"
      xmlSpace="preserve"
    >
      <g>
        <path d="M45.13,35.29h-0.04c-7.01-0.79-16.42,0.01-20.78,0C17.04,35.6,9.47,41.91,5.02,51.3 c-2.61,5.51-3.3,9.66-3.73,15.55C0.42,72.79-0.03,78.67,0,84.47c1.43,9.03,12.88,6.35,13.85,0l1.39-18.2 c0.21-2.75,0.4-4.61,1.51-7.23c0.52-1.23,1.15-2.28,1.89-3.15l0.69,33.25l-0.39,2.78h31.49l-0.42-3.1l0.61-36.67 c3.2-1.29,5.96-1.89,8.39-1.99c-0.12,0.25-0.25,0.5-0.37,0.75c-2.61,5.51-3.3,9.66-3.73,15.55c-0.86,5.93-1.32,11.81-1.29,17.61 c1.43,9.03,12.88,6.35,13.85,0l1.39-18.2c0.21-2.75,0.4-4.61,1.51-7.23c0.52-1.23,1.15-2.28,1.89-3.15l0.69,33.25l-0.46,3.24h31.62 l-0.48-3.55l0.49-28.62v0.56l0.1-4.87c0.74,0.87,1.36,1.92,1.89,3.15c1.12,2.62,1.3,4.48,1.51,7.23l1.39,18.2 c1.34,8.68,13.85,8.85,13.85,0c0.03-5.81-0.42-11.68-1.29-17.61c-0.43-5.89-1.12-10.04-3.73-15.55 c-4.57-9.65-10.48-14.76-19.45-15.81c-5.53-0.45-14.82,0.06-20.36-0.1c-1.38,0.19-2.74,0.47-4.06,0.87 c-3.45-0.48-8.01-1.07-12.56-1.09C54.76,34.77,48.15,35.91,45.13,35.29L45.13,35.29z M88.3,0c9.01,0,16.32,7.31,16.32,16.32 c0,9.01-7.31,16.32-16.32,16.32c-9.01,0-16.32-7.31-16.32-16.32C71.98,7.31,79.29,0,88.3,0L88.3,0z M34.56,0 c9.01,0,16.32,7.31,16.32,16.32c0,9.01-7.31,16.32-16.32,16.32s-16.32-7.31-16.32-16.32C18.24,7.31,25.55,0,34.56,0L34.56,0z" />
      </g>
    </svg>
  );
};

People.propTypes = {
  color: PropTypes.string,
};

export default People;
