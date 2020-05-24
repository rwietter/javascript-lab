import React, { useState, useEffect } from "react";
import {
  Grid,
  InputAdornment,
  Typography,
  Button,
  Card
} from "@material-ui/core";
import { LinkaTextField } from "@linka";
import { Link } from "react-router-dom";
import { MailOutline } from "@material-ui/icons";
import Formsy from "formsy-react";
import { createStyles, makeStyles } from "@material-ui/core";
//graphql
import { useQuery } from "@apollo/react-hooks";

import { wordsLanguage } from "utils.js";
import { GET_LANGUAGE } from "queries";

// componente que o usuário vai ser redirecionado ao clicar no email de recuperação

const useStyles = makeStyles(theme =>
  createStyles({
    gridForm: {
      width: "100%",
      maxWidth: 400,
      padding: 30
    },
    gridItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    margin: {
      marginTop: theme.spacing(2)
    },
    color: {
      backgroundColor: "#FFF"
    }
  })
);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}

function ResetPassword() {
  //load a language
  const {
    data: { language }
  } = useQuery(GET_LANGUAGE);
  const words = wordsLanguage(language.words);

  const classes = useStyles();

  const { height } = useWindowDimensions();

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        className={classes.gridItem}
        style={{ minHeight: height - 60 }}
      >
        <Card>
          <Grid></Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
export default ResetPassword;
