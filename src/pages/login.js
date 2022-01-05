import React from 'react';

import DetailsSection from '../components/login/DetailsSection';
import ImageSection from '../components/login/ImageSection';

import '../common/login/login.scss';

const Login = () => {
  return (
    <div className="Login__Page">
      <div className="Login__ImageSection">
        <ImageSection />
      </div>
      <div className="Login__DetailsSection">
        <DetailsSection />
      </div>
    </div>
  );
};

export default Login;
