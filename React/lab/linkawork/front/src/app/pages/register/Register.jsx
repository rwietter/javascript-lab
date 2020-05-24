import React from "react";
import { useTranslation } from "react-i18next";
import { Typography, Grid, makeStyles, createStyles } from "@material-ui/core";

import LanguageSelect from "../language/LanguageSelect";
import { useParams } from "react-router-dom";

import Me from "./Me";

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
    typographyLinka: {
      fontSize: 20,
      color: "#111111"
    },
    registerForm: {
      width: "100%",
      maxWidth: 500
    }
  })
);

function Cadastro() {
  //load a language
  const [t] = useTranslation("signup");
  const { type } = useParams();
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        xs={12}
        lg={6}
        direction="row"
        justify="center"
        alignItems="stretch"
        className={classes.background}
      ></Grid>
      <Grid item lg={6} xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid container spacing={3} className={classes.registerForm}>
            <Grid item xs={12}>
              <Typography variant="h4">{t("create_your_account")}</Typography>
              <br />
              <Me type={type} />
            </Grid>
            <Grid item xs={12}>
              <LanguageSelect />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Cadastro;
