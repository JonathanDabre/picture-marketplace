import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const clientId = "154745809431-6e76of8v1kcrldc79i9bsruhrtpqj7lr.apps.googleusercontent.com";

const Login = ({ onSuccess, onFailure }) => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div id="signInButton">
        <GoogleLogin
          onSuccess={(response) => {
            onSuccess(response);
          }}
          onFailure={(error) => {
            onFailure(error);
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
