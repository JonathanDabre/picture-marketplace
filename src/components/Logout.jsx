import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = "154745809431-6e76of8v1kcrldc79i9bsruhrtpqj7lr.apps.googleusercontent.com";

const Logout = ({ onLogoutSuccess }) => {
  return (
    <div id="signoutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
      />
    </div>
  );
};

export default Logout;
