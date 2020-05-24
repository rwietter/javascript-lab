import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Grid, Typography, Card } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core";
//graphql

import Footer from "../../components/header/Header";

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

function ForgotPassword() {
  const classes = useStyles();

  const { height } = useWindowDimensions();
  const [t] = useTranslation("forgot_password");

  return (
    <>
      <Grid>
        <Footer />
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          className={classes.gridItem}
          style={{ minHeight: height - 60 }}
        >
          <Card>
            <Grid container className={classes.gridForm}>
              <Grid item xs={12}>
                <Typography
                  align="center"
                  style={{ fontWeight: "bold", fontSize: "1em" }}
                >
                  {t("enteremailforpasswordreset")}
                </Typography>
              </Grid>
              <Grid>
                <Typography align="justify" className={classes.margin}>
                  {t("sendlinkforemail")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {/*<Formsy>
                  <LinkaTextField
                    name="email"
                    placeholder={t("usernameoremail")}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    error
                    className={classes.color}
                    size="small"
                    type="email"
                    validations="isEmail"
                    validationError={t("validation_email")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutline style={{ fontSize: 20 }} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <Grid item xs={12}>
                    <Button
                      className={classes.margin}
                      type="submit"
                      variant="contained"
                      size="normal"
                      color="primary"
                      style={{
                        textTransform: "initial",
                        width: "100%"
                      }}
                      disabled={loading}
                    >
                      {t("recover")}
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Link
                      to="/login"
                      className={`${classes.gridItem} ${classes.margin}`}
                    >
                      {t("back")}
                    </Link>
                  </Grid>
                    </Formsy>*/}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ForgotPassword;
