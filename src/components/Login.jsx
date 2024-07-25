import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const Login = ({ onSuccess, onFailure }) => {
  return (
    <div id="signInButton">
      <GoogleLogin
        onSuccess={onSuccess}
        onFailure={onFailure}
        logo
      />
    </div>
  );
};

export default Login;
