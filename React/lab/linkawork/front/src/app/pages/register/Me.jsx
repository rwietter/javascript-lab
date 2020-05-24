import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  CardActions,
  CardMedia
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { parse } from "date-fns";
import Divider from "app/components/divider/Divider";
//graphql
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { ALERT } from "queries";
import { useTranslation } from "react-i18next";
import { Formik, Form, TextField } from "@formik";
import { validaCnpj } from "utils.js";
import Linkedin from "../linkedin/Linkedin";

const useStyles = makeStyles(theme =>
  createStyles({
    margin: {
      marginBottom: theme.spacing(2)
    },
    form: {
      marginTop: theme.spacing(5)
    },
    primary: {
      color: "#6038A5",
      backgroundColor: "#ffffff",
      "&:hover": {
        backgroundColor: "#ffffff"
      }
    }
  })
);

const UPLOAD_CV = gql`
  mutation UploadCv($file: Upload!) {
    uploadCv(file: $file) {
      id
      name
      firstname
      lastname
      email
      birthday
      zipcode
      phone
      years
      marital_status
      state
    }
  }
`;

const DELETE_CV = gql`
  mutation DeleteCv($id: ID!) {
    deleteCv(id: $id) {
      id
    }
  }
`;

const CREATE_ACCOUNT = gql`
  mutation CreateAccount(
    $firstname: String!
    $lastname: String!
    $company_name: String
    $cnpj: String
    $email: String!
    $password: String!
    $type: String!
    $phone: String
    $zipcode: String
    $birthday: String
    $curriculum: ID
  ) {
    createAccount(
      firstname: $firstname
      lastname: $lastname
      company_name: $company_name
      cnpj: $cnpj
      email: $email
      password: $password
      type: $type
      phone: $phone
      zipcode: $zipcode
      birthday: $birthday
      curriculum: $curriculum
    ) {
      id
      firstname
      lastname
      email
      type
      token
      auths
    }
  }
`;

function Me({ type }) {
  const [curriculum, setCurriculum] = useState(null);

  //alert
  const [alert] = useMutation(ALERT);

  const [uploadCv, { loading: cv_loading }] = useMutation(UPLOAD_CV);
  const [deleteCv] = useMutation(DELETE_CV);
  const [createAccount] = useMutation(CREATE_ACCOUNT);

  const classes = useStyles();

  const [t] = useTranslation("signup");

  const fileChange = (e, setFieldValue) => {
    let file = e.target.files[0];
    uploadCv({ variables: { file: file } }).then(result => {
      if (result.errors)
        return alert({
          variables: {
            message: result.errors[0].message,
            variant: "error",
            horizontal: "right"
          }
        });

      let { uploadCv } = result.data;
      setCurriculum({ filename: file.name, ...uploadCv });
      setFieldValue("firstname", uploadCv.firstname);
      setFieldValue("lastname", uploadCv.lastname);
      setFieldValue("email", uploadCv.email);
      setFieldValue("phone", uploadCv.phone);
      setFieldValue("zipcode", uploadCv.zipcode);
      setFieldValue("birthday", uploadCv.birthday);
    });
  };

  const deleteCurriculum = () => {
    deleteCv({ variables: { id: curriculum.id } }).then(result => {
      if (result.errors)
        return alert({
          variables: {
            message: result.errors[0].message,
            variant: "error",
            horizontal: "right"
          }
        });

      setCurriculum(null);
    });
  };

  const onSubmit = (values, { setErrors }) => {
    createAccount({
      variables: {
        ...values,
        curriculum: curriculum ? curriculum.id : null,
        type: "physical",
        birthday: values.birthday
          ? parse(values.birthday, "dd/mm/yyyy", new Date())
          : null
      }
    }).then(result => {
      if (result.errors) {
        alert({
          variables: {
            message: result.errors[0].message,
            variant: "error",
            horizontal: "right"
          }
        });
        return setErrors(result.errors[0].fields);
      }
      if (result.data.createAccount) {
        let {
          token,
          auths,
          firstname,
          lastname,
          email
        } = result.data.createAccount;
        auths = JSON.stringify(auths);
        auths = btoa(auths);
        let user = JSON.stringify({ firstname, lastname, email, auths });
        localStorage.setItem("token", token);
        localStorage.setItem("user", user);
        window.location.href = "/";
      }
    });
  };

  return (
    <Grid container>
      <Formik
        initialValues={{
          firstname: null,
          lastname: null,
          company_name: null,
          email: null,
          phone: null,
          zipcode: null,
          birthday: null,
          password: null,
          confirm_password: null
        }}
        onSubmit={onSubmit}
      >
        {({ isValid, setFieldValue, values }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Linkedin
                    type={
                      type === "me"
                        ? "physical"
                        : (type === "business" && "legal") || ""
                    }
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Divider label={"ou"} />
              </Grid>

              {type === "me" && (
                <Grid item xs={12}>
                  <Typography>{t("uploadcvmessage")}</Typography>
                  {!curriculum && (
                    <>
                      <input
                        accept=".doc,.docx,.pdf"
                        style={{ display: "none" }}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={e => fileChange(e, setFieldValue)}
                      />
                      <label htmlFor="contained-button-file">
                        <Button
                          component="span"
                          variant="contained"
                          color="primary"
                          className={`${classes.margin}`}
                          style={{ textTransform: "inherit" }}
                          disabled={cv_loading}
                        >
                          {!cv_loading && t("selectfile")}
                          {cv_loading && (
                            <CircularProgress
                              variant="indeterminate"
                              color="primary"
                              size="20px"
                            />
                          )}
                        </Button>
                      </label>
                    </>
                  )}

                  {curriculum && (
                    <Card style={{ maxWidth: 250 }}>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={require("assets/imagens/cv.png")}
                        title="Contemplative Reptile"
                      />
                      <CardContent style={{ fontFamily: "Raleway" }}>
                        {curriculum.filename}
                      </CardContent>
                      <CardActions>
                        <Button
                          component="span"
                          onClick={() => deleteCurriculum()}
                        >
                          {t("Remove")}
                        </Button>
                      </CardActions>
                    </Card>
                  )}
                </Grid>
              )}
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstname"
                  label={t("name")}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  required
                  type="text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastname"
                  label={t("lastname")}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  required
                  type="text"
                />
              </Grid>

              {type === "business" && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="company_name"
                      label={t("Company name")}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                      required
                      type="text"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="cnpj"
                      label={t("Cnpj")}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                      required
                      type="text"
                      mask="cnpj"
                      validate={value =>
                        !validaCnpj(value) && t("error_cnpj_invalid")
                      }
                    />
                  </Grid>
                </>
              )}

              <Grid item xs={12}>
                <TextField
                  name="email"
                  label={t("email")}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  validations="isEmail"
                  validationError={t("errormailvalid")}
                />
              </Grid>

              {curriculum && curriculum.phone && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="phone"
                    label={t("phone")}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    type="text"
                    mask="phone"
                  />
                </Grid>
              )}

              {curriculum && curriculum.zipcode && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="zipcode"
                    label={t("zipcode")}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    type="text"
                    mask="cep"
                  />
                </Grid>
              )}

              {curriculum && curriculum.birthday && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="birthday"
                    label={t("birthday")}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    type="text"
                    mask="date"
                  />
                </Grid>
              )}

              <Grid item xs={12} sm={6}>
                <TextField
                  name="password"
                  label={t("password")}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  required
                  color="secondary"
                  type="password"
                  validate={value => value.length < 8 && t("shortpassword")}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  name="confirm_password"
                  label={t("confirmpassword")}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  required
                  type="password"
                  validate={value =>
                    value !== values.password && t("passwordsnotmatch")
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" justify="space-between">
                  <Link to="/login">
                    <Button color="primary">{t("login")}</Button>
                  </Link>
                  <Button type="submit" variant="contained" color="primary">
                    {t("signup")}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}

export default Me;
