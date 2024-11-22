import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "../routes/root";
import ErrorPage from "./error-page";
import Ors from "../routes/ors";
import { Auth0Provider } from '@auth0/auth0-react'
import { createTheme, ThemeProvider,  } from '@mui/material/styles';

//import LoginBtn from "./comps/btn/LoginBtn";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import OrsGraph from "./pages/orsAndSrs/OrsGraph";
import Home from "./pages/home"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,


  children: [

    {    path: "home",
      element: <Home/>,
      },
  {    path: "ors",
  element: <Ors/>,
},
{    path: "ors/graph",
  element: <OrsGraph/>,
},

{    path: "ors/:userId",
element: <Ors/>,
},

],
},
]);

const theme = createTheme({

  palette: {
    myColor: {
      main: "#6a93bd",
      light: '#E9DB5D',
      dark: '#A29415',
     
    },
  },

    typography: {
      qustionsHeadline: {
        fontSize: "1.5rem",
        textAlign:"center",
        fontWeight: 400,

      },
      qustionsSubHeadline: {
        fontSize: "1rem",
        textAlign:"center", 
        fontWeight: 200,

      },
    
    },

    MuiSlider: {
      styleOverrides: {
        root: {
          variants: [
            {
              // `dashed` is an example value, it can be any name.
              props: { variant: 'forQustions' },
              style: {
                color: "blue",
                width: "100%", 
                mt: 5,
                '& .MuiSlider-thumb': {
                  height: 12,
                  width: 12,
                  backgroundColor: '#fff',
                  border: '1px solid currentColor',
           
                },
              },
            },
          ],
        },
      },
    },
  
});




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

       <Auth0Provider
    domain="dev-f4r85odd2ke7iwrw.us.auth0.com"
    clientId="7sHDlHGZjz891zPpPEEPVsIJBnxrmLO1"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/ors"
    }}
  >
<RouterProvider router={router}/> 
 

    </Auth0Provider>
  
    </ThemeProvider>

  </React.StrictMode>
);