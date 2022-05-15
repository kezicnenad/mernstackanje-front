import { GoogleLogin } from 'react-google-login';

const clientId = "81687935679-p868qnia2d0ktqt72pvtfgn0f68rhf4m.apps.googleusercontent.com";

function Login(){

  const onSuccess = (res) => {
    console.log("User logged");
  }

  const onFailure = (res) => {
    console.log("Login failed:", res)
  }

  return(
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;