import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import { esES } from "@material-ui/core/locale";
import { ThemeObject } from "../styles/theme";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/roboto";
import "../styles/globals.css";
import AuthState from "../components/Auth/Context/AuthState";
import BackdropLoader from "../components/Loader/BackdropLoader";

function MyApp({ Component, pageProps }) {
  const theme = createMuiTheme(ThemeObject, esES);

  return (
    <MuiThemeProvider theme={theme}>
      <AuthState>
        <BackdropLoader />
        <Component {...pageProps} />
        <ToastContainer />
      </AuthState>
    </MuiThemeProvider>
  );
}

export default MyApp;
