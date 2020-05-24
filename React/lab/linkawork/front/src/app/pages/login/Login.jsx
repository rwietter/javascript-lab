import React from "react";
import { Grid, Typography, makeStyles, createStyles } from "@material-ui/core";
import LanguageSelect from "../language/LanguageSelect";
import LoginForm from "./LoginForm";
//graphql
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      minHeight: "100vh"
    },
    background: {
      backgroundColor: "#ddd",
      background: "url('/assets/imagens/23043.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    loginForm: {
      width: "100%",
      maxWidth: 450,
      padding: 30
    },
    gridForm: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    typographyLinka: {
      marginLeft: 8,
      fontSize: 25,
      color: "#111111"
    }
  })
);

function Login() {
  const classes = useStyles();
  const [t] = useTranslation("login");

  return (
    <>
      <Grid container className={classes.root}>
        <Grid
          item
          container
          lg={6}
          direction="row"
          justify="center"
          alignItems="stretch"
          className={classes.background}
        ></Grid>
        <Grid item lg={6} xs={12} className={classes.gridForm}>
          <Grid container spacing={1} className={classes.loginForm}>
            <Grid item xs={12}>
              <Typography className={classes.typographyLinka}>
                {t("signinto")} Linkawork
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LoginForm />
            </Grid>
            <Grid item xs={12}>
              <LanguageSelect />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
