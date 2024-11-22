import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
        <Button
color="secondary" variant="filled"          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </Button>
        <br />
      </>
    );
  }
};

export default LogoutButton;