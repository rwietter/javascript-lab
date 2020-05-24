import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Button } from "@material-ui/core";

const useStyles = makeStyles(theme =>
  createStyles({
    ops: {
      fontSize: 50
    },
    container: {
      display: "flex",
      width: "100vw",
      height: "100vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    errorCode: {
      fontSize: 150,
      color: theme.palette.primary.main
    },
    message: {
      fontSize: 30
    },
    button: {
      marginTop: 30
    }
  })
);

function Page404() {
  const classes = useStyles();
  const [t] = useTranslation("error_auth404");
  return (
    <div className={classes.container}>
      <div className={classes.ops}>Ooops!</div>
      <div className={classes.errorCode}>404</div>
      <div className={classes.message}>{t("auth404message")}</div>
      <div className={classes.button}>
        <Link to="/">
          <Button variant="contained" color="primary">
            {t("initial_page")}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page404;
