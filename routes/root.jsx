
import { Outlet, Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Navbar from "../src/comps/navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginButton from "../src/comps/btn/loginBtn";
import Profile from "../src/comps/proflle";


       {/* mamma sidan, denna finns alltid, barn spawnar under outlet"
       const theme = createTheme({
        components: {
          MuiSlider: {
            styleOverrides: {
              root: {
                variants: [
                  {
                    // `dashed` is an example value, it can be any name.
                    props: { variant: 'forQustions' },
                    style: {
                      "& .MuiSlider-thumb": {
                        "&:hover, &.Mui-focusVisible": {
                          boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
                        },
                        "&.Mui-active": {
                          boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      });
      */} 

export default function Root() {
  const { isAuthenticated } = useAuth0();
    return (
      <>
           <Container sx={{ minWidth: "100vw",}}>
          <Navbar />
      

<Link to={"ors"} > ORS </Link>
        {/* här hammnar "sidan"*/} 
        <Outlet />
      </Container>
      </>
    );
  }