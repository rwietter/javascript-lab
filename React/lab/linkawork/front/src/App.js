import React from "react";
import { ThemeProvider, makeStyles, createStyles } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import Routes from "app/routes/Routes";

import Layout from "app/components/layout/Layout";

import Auth from "app/components/auth/Auth";

//Apollo components
import { ApolloProvider } from "react-apollo";
import client from "./clients/graphql";

//i18n provider
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import translate from "./translation/";

//theme
import palette from "./palette.js";
const history = createBrowserHistory();

const theme = createMuiTheme({
  palette,
  typography: {
    button: {
      textTransform: "initial"
    }
  }
});

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

//i18n provider
i18next.init({
  interpolation: { escapeValue: true }, // React already does escaping
  lng: "pt_br", // language to use
  resources: translate
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ApolloProvider client={client}>
        <I18nextProvider i18n={i18next}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ThemeProvider theme={theme}>
              <Router history={history}>
                <Auth>
                  <Layout history={history}>
                    <Routes />
                  </Layout>
                </Auth>
              </Router>
            </ThemeProvider>
          </MuiPickersUtilsProvider>
        </I18nextProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
