import { GoogleLogout } from "react-google-login";

const clientId = "81687935679-p868qnia2d0ktqt72pvtfgn0f68rhf4m.apps.googleusercontent.com";

function Logout(){

  const onSuccess = () => {
    console.log("Log out successfull");
  }

  return(
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;