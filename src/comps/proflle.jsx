import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    console.log("loading");
}
else if (!isAuthenticated) {
    console.log("authenticated: ", isAuthenticated);
}
else if (!isLoading && isAuthenticated) {
    const { name, picture, email } = user;
    return (
        console.log("last")
   )
}
}

export default Profile;