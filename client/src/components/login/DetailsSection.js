/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { signIn, signUp } from '../../actions/auth';

// import Google from '../../assets/icons/Google';

import '../../common/login/details-section.scss';

const DetailsSection = () => {
  // const [signedIn, setSignedIn] = useState(false);
  const [login, setLogin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const dispatch = useDispatch();
  // const [auth, setAuth] = useState(null);

  const history = useHistory();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });

      history.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log('Google Sign In Failed');
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleTermsChange = (event) => {
    setFormData({ ...formData, terms: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    if (!login) {
      dispatch(signIn(formData, history));
    } else {
      dispatch(signUp(formData, history));
    }
  };

  return (
    <div className="Details__Section">
      <div className="Details__Section__Heading">Let&apos;s get started.</div>
      <div className="Details__Section__Switch">
        <div className="Details__Section__Switch-text">
          {login ? 'Already have an account?' : 'Create an account.'}
        </div>
        &nbsp;
        <div
          onClick={() => setLogin(!login)}
          className="Details__Section__Switch-button"
        >
          {login ? 'Sign in.' : 'Register.'}
        </div>
      </div>
      {/* <div className="Details__Section__Google">
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
      </div>
      <div className="Details__Section__Seperator">
        <div /> &nbsp; or &nbsp; <div />
      </div> */}
      <div className="Details__Section__FormSection">
        <form
          className="Details__Section__Form"
          onSubmit={(event) => handleSubmit(event)}
        >
          {login ? (
            <div className="Details__Section__Form-name">
              <div className="Details__Section__Form-name-first">
                <label className="Details__Section__Form-label">
                  First Name
                </label>
                <input
                  name="firstName"
                  onChange={(event) => handleChange(event)}
                  className="Details__Section__Form-input"
                  type="text"
                />
              </div>
              <div className="Details__Section__Form-name-last">
                <label className="Details__Section__Form-label">
                  Last Name
                </label>
                <input
                  name="lastName"
                  onChange={(event) => handleChange(event)}
                  className="Details__Section__Form-input"
                  type="text"
                />
              </div>
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
          <label className="Details__Section__Form-label">Email address</label>
          <input
            name="email"
            onChange={(event) => handleChange(event)}
            className="Details__Section__Form-input"
            type="text"
          />
          <label className="Details__Section__Form-label">Password</label>
          <input
            name="password"
            onChange={(event) => handleChange(event)}
            className="Details__Section__Form-input"
            type="password"
          />
          {login ? (
            <React.Fragment>
              <label className="Details__Section__Form-label">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                onChange={(event) => handleChange(event)}
                className="Details__Section__Form-input"
                type="password"
              />

              <div className="Details__Section__Terms">
                <input
                  name="terms"
                  onChange={(event) => handleTermsChange(event)}
                  checked={formData.terms}
                  type="checkbox"
                />
                <label>
                  I agree to Spectrum&apos;s Terms of Service and Privacy Policy
                </label>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}

          <button className="Details__Section__Button" type="submit">
            {login ? 'Register' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsSection;
