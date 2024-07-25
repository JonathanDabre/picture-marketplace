import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "154745809431-6e76of8v1kcrldc79i9bsruhrtpqj7lr.apps.googleusercontent.com";

const Login = ({ onSuccess, onFailure }) => {
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
