import React from "react";
import {
  Grid,
  InputAdornment,
  Button,
  Divider,
  TextField as TextFieldMUI,
  Tooltip,
  IconButton
} from "@material-ui/core";
import { Formik, Form, TextField, DatePicker, Select } from "@formik";
import { Link } from "react-router-dom";
import { validaCnpj, validaCpf } from "utils";
import { useTranslation } from "react-i18next";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Skeleton from "react-loading-skeleton";
import cep from "cep-promise";
import { Edit as EditIcon } from "@material-ui/icons";

const GET_ME = gql`
  query GET_ME {
    me {
      id
      firstname
      lastname
      email
      type
      cpf
      cnpj
      phone
      birthday
      educational_background {
        id
      }
      zipcode
      state
    }
  }
`;

const GET_EDUCATIONAL_BACKGROUNDS = gql`
  query GET_EDUCATIONAL_BACKGROUNDS {
    educational_backgrounds {
      id
      description
    }
  }
`;

function EducationlBackgrounds(props) {
  let { data, loading, error } = useQuery(GET_EDUCATIONAL_BACKGROUNDS);
  return (
    <Select
      disabled={loading || error}
      {...props}
      itens={
        data
          ? data.educational_backgrounds.map(item => {
              return { value: item.id, text: item.description };
            })
          : []
      }
    />
  );
}

function Informations(props) {
  const { data, loading } = useQuery(GET_ME);
  const [t] = useTranslation(["account", "geral"]);

  let type;
  if (data && data.me) type = data.me.type;
  return (
    <Formik
      enableReinitialize
      initialValues={
        data &&
        data.me && {
          firstname: data.me.firstname,
          lastname: data.me.lastname,
          email: data.me.email,
          cpf: data.me.cpf,
          cnpj: data.me.cnpj,
          birthday: data.me.birthday,
          phone: data.me.phone,
          educational_background: data.me.educational_background.id,
          zipcode: data.me.zipcode,
          state: data.me.state
        }
      }
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      {({ isValid, values, setFieldValue }) => (
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <TextField
                  type="text"
                  name="firstname"
                  label={t("Firstname")}
                  variant="outlined"
                  required
                  validate={value => {
                    if (value.length < 5) return "Teset";
                  }}
                  fullWidth
                  margin="dense"
                />
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <TextField
                  type="text"
                  name="lastname"
                  label={t("Lastname")}
                  variant="outlined"
                  required
                  validate={value => {
                    if (value.length < 5) return "Teset";
                  }}
                  fullWidth
                  margin="dense"
                />
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <TextField
                  type="text"
                  name="email"
                  label={t("email")}
                  disabled
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Tooltip title={t("geral:Change")}>
                          <Link to="/change-email">
                            <IconButton>
                              <EditIcon />
                            </IconButton>
                          </Link>
                        </Tooltip>
                      </InputAdornment>
                    )
                  }}
                />
              )}
            </Grid>

            <Grid item xs={12} md={4}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <>
                  {type === "physical" && (
                    <TextField
                      type="text"
                      name="cpf"
                      label={t("cpf")}
                      mask="cpf"
                      validate={value => {
                        if (!validaCpf(value)) return t("is_non_valid_cpf");
                      }}
                      variant="outlined"
                      fullWidth
                      margin="dense"
                    />
                  )}

                  {type === "legal" && (
                    <TextField
                      type="text"
                      name="cnpj"
                      label={t("cnpj")}
                      mask="cnpj"
                      validate={value => {
                        if (!validaCnpj(value)) return t("is_non_valid_cnpj");
                      }}
                      variant="outlined"
                      fullWidth
                      margin="dense"
                    />
                  )}
                </>
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <DatePicker
                  format="dd/MM/yyyy"
                  margin="dense"
                  label={t("Birthday")}
                  inputVariant="outlined"
                  name="birthday"
                  fullWidth
                />
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <TextField
                  type="text"
                  name="phone"
                  label={t("phone")}
                  mask="telefone"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                />
              )}
            </Grid>

            <Grid item xs={12} md={4}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <EducationlBackgrounds
                  name="educational_background"
                  label={t("academic_formation")}
                  fullWidth
                  margin="dense"
                />
              )}
            </Grid>

            <Grid item xs={12} md={4}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <TextFieldMUI
                  type="password"
                  label={t("password")}
                  disabled
                  value="*********"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Tooltip title={t("geral:Change")}>
                          <Link to="/change-password">
                            <IconButton>
                              <EditIcon />
                            </IconButton>
                          </Link>
                        </Tooltip>
                      </InputAdornment>
                    )
                  }}
                />
              )}
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={12} md={3}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <TextField
                  type="text"
                  name="zipcode"
                  label={t("zipcode")}
                  mask="cep"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  onChange={e =>
                    e.target.value.length === 10 &&
                    cep(e.target.value).then(response => {
                      setFieldValue("state", response.state);
                      setFieldValue("city", response.city);
                      setFieldValue("neighborhood", response.neighborhood);
                    })
                  }
                />
              )}
            </Grid>

            <Grid item xs={12} md={2}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <TextField
                  type="text"
                  name="state"
                  label={t("state")}
                  variant="outlined"
                  fullWidth
                  margin="dense"
                />
              )}
            </Grid>

            <Grid item xs={12} md={3}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <TextField
                  type="Text"
                  name="city"
                  label={t("city")}
                  variant="outlined"
                  fullWidth
                  margin="dense"
                />
              )}
            </Grid>

            <Grid item xs={12} md={4}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <TextField
                  type="Text"
                  name="bairro"
                  label={t("neighborhood")}
                  variant="outlined"
                  fullWidth
                  margin="dense"
                />
              )}
            </Grid>

            <Grid item xs={12} md={2}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <TextField
                  type="number"
                  name="numero"
                  label={t("number")}
                  variant="outlined"
                  fullWidth
                  margin="dense"
                />
              )}
            </Grid>

            <Grid item xs={12} md={3}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <TextField
                  type="text"
                  name="complement"
                  label={t("complement")}
                  variant="outlined"
                  fullWidth
                  margin="dense"
                />
              )}
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{ textTransform: "initial" }}
                disabled={!isValid}
              >
                {t("save")}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default Informations;
