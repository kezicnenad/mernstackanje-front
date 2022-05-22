import React, { useContext } from 'react';
import { GoogleLogout } from "react-google-login";
import { handleIsLoggedContext } from '../../../App';

const clientId = "81687935679-p868qnia2d0ktqt72pvtfgn0f68rhf4m.apps.googleusercontent.com";

function Logout(){

  const handleIsLogged = useContext(handleIsLoggedContext);

  const onSuccess = () => {
    // console.log("Logged out");
    handleIsLogged(false);
  }

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        render={(renderProps) => (
          <span onClick={renderProps.onClick} className="linkButton">
            Logout
          </span>
        )}
      />
    </div>
  );
}

export default Logout;