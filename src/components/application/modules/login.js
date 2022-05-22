import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import { handleIsLoggedContext } from '../../../App';

const clientId = "81687935679-p868qnia2d0ktqt72pvtfgn0f68rhf4m.apps.googleusercontent.com";

function Login(){

  const handleIsLogged = useContext(handleIsLoggedContext);

  const onSuccess = (res) => {
    // console.log("User logged");
    handleIsLogged(true);
  }

  const onFailure = (res) => {
    console.log("Login failed:", res);
    handleIsLogged(false);
  }

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        render={(renderProps) => (
          <span onClick={renderProps.onClick} className="linkButton">
            Login
          </span>
        )}
      />
    </div>
  );
}

export default Login;