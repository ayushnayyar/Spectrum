import React from 'react';
import PropTypes from 'prop-types';

const Rewards = ({ color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width="22px"
      height="22px"
      x="0px"
      y="0px"
      viewBox="0 0 94.56 122.88"
      xmlSpace="preserve"
    >
      <g>
        <path d="M38.14,21.15c-1.9-5.6-3.6-11.25-5.05-17c5.38-5.9,26.15-5.12,32.13-0.09l-5.53,13.15 c2.98-3.91,3.98-5.51,5.75-7.69c0.75,0.49,1.45,1.04,2.11,1.64c1.57,1.42,2.98,3,3.26,5.19c0.18,1.42-0.22,2.87-1.49,4.35 L56.63,35.48c-1.63-0.27-3.23-0.66-4.78-1.21c0.72-1.69,1.59-3.56,2.31-5.25L49.54,34c-4.81-1.02-8.69-0.41-12.29,1.5L24.37,20.05 c-0.76-0.92-1.11-1.84-1.11-2.76c0.01-3.73,5.57-6.96,8.5-8.18L38.14,21.15L38.14,21.15z M54.64,49.06l-2.51-11.49 c10.76,2,28.01,23.89,33.58,33.84c2.84,5.08,5.34,10.68,7.38,16.93c4.06,15.14,0.15,29.3-16.27,32.6 c-10.29,2.07-29.48,2.21-40.3,1.65c-11.63-0.6-29.64-0.58-34.34-12.53c-7.59-19.28,6.32-42.25,19-56.31 c1.67-1.85,3.39-3.57,5.18-5.17c4.61-4.06,9.59-8.87,15.52-10.88l-5.74,10.68l8.33-11.04h4.39L54.64,49.06L54.64,49.06z M49.29,58.49v2.03c2.15,0.23,4,0.67,5.54,1.33c1.54,0.67,2.88,1.67,4.03,3.02c0.91,1.03,1.61,2.09,2.1,3.17 c0.49,1.09,0.74,2.08,0.74,2.99c0,1.01-0.37,1.88-1.1,2.61c-0.74,0.73-1.63,1.1-2.68,1.1c-1.98,0-3.26-1.07-3.84-3.2 c-0.67-2.51-2.26-4.19-4.8-5.01v12.55c2.49,0.68,4.49,1.31,5.96,1.87c1.48,0.56,2.81,1.37,3.97,2.44c1.25,1.1,2.21,2.43,2.89,3.96 c0.67,1.54,1.01,3.22,1.01,5.05c0,2.29-0.53,4.44-1.62,6.43c-1.08,2.01-2.67,3.63-4.76,4.91c-2.1,1.27-4.58,2.02-7.46,2.25v2.05 c0,1.18-0.12,2.05-0.35,2.59c-0.23,0.54-0.73,0.81-1.52,0.81c-0.72,0-1.23-0.22-1.52-0.66c-0.29-0.44-0.43-1.13-0.43-2.06v-2.68 c-2.35-0.26-4.41-0.81-6.17-1.66c-1.76-0.84-3.23-1.89-4.41-3.15c-1.17-1.27-2.05-2.57-2.6-3.92c-0.57-1.36-0.84-2.7-0.84-4 c0-0.96,0.37-1.83,1.13-2.6c0.75-0.77,1.69-1.16,2.81-1.16c0.91,0,1.67,0.21,2.3,0.63c0.62,0.42,1.05,1.02,1.3,1.78 c0.54,1.65,1.01,2.91,1.41,3.79c0.41,0.87,1.02,1.68,1.83,2.4c0.81,0.72,1.89,1.28,3.24,1.66V85.79c-2.7-0.75-4.94-1.57-6.75-2.49 c-1.81-0.92-3.28-2.21-4.4-3.9c-1.12-1.69-1.69-3.86-1.69-6.51c0-3.46,1.1-6.3,3.3-8.5c2.2-2.21,5.38-3.5,9.54-3.86v-1.97 c0-1.69,0.64-2.53,1.9-2.53C48.65,56.02,49.29,56.84,49.29,58.49L49.29,58.49z M45.46,77.95V66.4c-1.69,0.5-3.01,1.16-3.95,1.99 c-0.95,0.82-1.42,2.08-1.42,3.75c0,1.58,0.44,2.79,1.33,3.6C42.3,76.55,43.65,77.29,45.46,77.95L45.46,77.95z M49.29,86.9v13.22 c2.03-0.4,3.59-1.21,4.7-2.44c1.1-1.24,1.66-2.66,1.66-4.29c0-1.75-0.54-3.1-1.62-4.06C52.96,88.37,51.38,87.56,49.29,86.9 L49.29,86.9z" />
      </g>
    </svg>
  );
};

Rewards.propTypes = {
  color: PropTypes.string,
};

export default Rewards;
