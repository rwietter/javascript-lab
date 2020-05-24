import React, { useState } from "react";
import {
  Grid,
  InputAdornment,
  IconButton,
  Tooltip,
  FormControlLabel,
  Checkbox,
  Button
} from "@material-ui/core";
import {
  VisibilityOutlined,
  VisibilityOffOutlined,
  AlternateEmailOutlined,
  LockOutlined,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  CheckBox as CheckBoxIcon
} from "@material-ui/icons";
import { Formik, Form, TextField } from "@formik";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ButtonNovaConta from "./ButtonNovaConta";
import Divider from "app/components/divider/Divider";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { ALERT } from "queries";
import { useTranslation } from "react-i18next";
import Linkedin from "../linkedin/Linkedin";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      token
      firstname
      lastname
      email
      auths
    }
  }
`;

const useStyles = makeStyles(theme =>
  createStyles({
    title: {
      fontFamily: "Baloo"
    },
    textField: {
      margin: theme.spacing(1)
    },
    margin: {
      padding: theme.spacing(1)
    },
    background: {
      backgroundImage: "url(./team-vector.jpg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    },
    loginContent: {
      width: "100%"
    },
    buttonSubmit: {
      borderColor: "#2D283E",
      width: 400,
      color: "#802BB1"
    },
    forgotPassword: {
      marginTop: 10,
      position: "relative",
      marginLeft: 10,
      marginBottom: 14
    }
  })
);

function LoginForm() {
  const [values, setValues] = useState({
    showPassword: false,
    canSubmit: false
  });
  const [checkbox, setCheckbox] = useState(true);

  const [login] = useMutation(LOGIN);

  const [alert] = useMutation(ALERT);

  const classes = useStyles();
  const [t] = useTranslation("login");

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onSubmit = (model, { setSubmitting, setErrors }) => {
    login({ variables: model }).then(result => {
      setSubmitting(false);
      if (result.errors && result.errors[0].fields)
        setErrors(result.errors[0].fields);
      else if (result.errors && result.errors.length > 0)
        alert({
          variables: {
            message: result.errors[0].message,
            variant: "error",
            horizontal: "right"
          }
        });
      else if (result.data.login) {
        let { token, auths, firstname, lastname, email } = result.data.login;
        auths = JSON.stringify(auths);
        auths = btoa(auths);
        let user = JSON.stringify({ firstname, lastname, email, auths });
        if (checkbox) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", user);
        } else {
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("user", user);
        }
        window.location.href = "/";
      }
    });
  };

  return (
    <Grid container>
      <Formik
        onSubmit={onSubmit}
        initialValues={{ email: null, password: null }}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  placeholder={t("usernameoremail")}
                  margin="normal"
                  variant="outlined"
                  className={classes.textField}
                  color="secondary"
                  fullWidth
                  required
                  error
                  type="email"
                  validations="isEmail"
                  validationError={t("pleaseemailvalid")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmailOutlined
                          style={{ fontSize: 20 }}
                          className={classes.secondary}
                        />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  placeholder={t("password")}
                  margin="normal"
                  variant="outlined"
                  className={`${classes.textField}`}
                  color="secondary"
                  fullWidth
                  required
                  type={values.showPassword ? "text" : "password"}
                  validate={value => value.length < 8 && t("lowpassword")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlined style={{ fontSize: 20 }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Tooltip
                          title={
                            !values.showPassword ? t("showpass") : t("hidepass")
                          }
                        >
                          <IconButton
                            aria-label={t("showpass")}
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {!values.showPassword ? (
                              <VisibilityOutlined />
                            ) : (
                              <VisibilityOffOutlined />
                            )}
                          </IconButton>
                        </Tooltip>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  style={{ marginTop: 0, marginLeft: 0 }}
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      checked={checkbox}
                      onChange={e => setCheckbox(e.target.checked)}
                      color="primary"
                    />
                  }
                  label={t("stayloggedin")}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  style={{ marginLeft: 8 }}
                  fullWidth
                >
                  {t("signin")}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ marginLeft: 8 }}
      >
        <Grid item>
          <ButtonNovaConta />
        </Grid>
        <Grid item>
          <Link to="/forgot-password">{t("forgotpassword")}</Link>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider label={"ou"} />
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Linkedin type="physical" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
