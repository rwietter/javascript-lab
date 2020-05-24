import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Button, Card, CardHeader, CardContent } from "@material-ui/core";
import { Formik, Form } from "formik";
import { TextField } from "@formik";

function ChangePassword(props) {
  const [t] = useTranslation("account");

  return (
    <Card>
      <CardHeader title={t("Change password")} />
      <CardContent>
        <Formik
          initialValues={{
            password: ""
          }}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
          validateOnChange={teste => {
            console.log(teste);
          }}
        >
          {props => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <TextField
                    type="password"
                    name="current-password"
                    label={t("Current password")}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} md={8}></Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    type="password"
                    name="password"
                    label={t("New password")}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} md={8}></Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    type="password"
                    name="confirm-password"
                    label={t("Confirm password")}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} md={8}></Grid>
                <Grid item>
                  <Button
                    disabled={props.disabled}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    {t("Save")}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
export default ChangePassword;
