import React from 'react';

import Login from '../../assets/images/Login.js';
import '../../common/login/image-section.scss';

const ImageSection = () => {
  return (
    <div className="ImageSection">
      <Login className="ImageSection__Image" />
      {/* <img className="ImageSection__Image" src={LoginIllustration} /> */}
    </div>
  );
};

export default ImageSection;
