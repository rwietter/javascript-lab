import React, { useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Formik, Form, TextField, Wysiwyg, Skeleton } from "@formik";
import { useTranslation } from "react-i18next";
import gql from "graphql-tag";
import { useMutation, useLazyQuery } from "@apollo/react-hooks";

const CREATE_TEST_VARIABLE = gql`
  mutation CREATE_TEST_VARIABLE(
    $test: ID!
    $name: String!
    $description: String
  ) {
    createTestVariable(test: $test, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

const UPDATE_TEST_VARIABLE = gql`
  mutation CREATE_TEST_VARIABLE($id: ID!, $name: String, $description: String) {
    updateTestVariable(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

const GET_VARIABLE = gql`
  query GET_VARIABLE($id: ID!) {
    variables(id: $id) {
      id
      name
      description
    }
  }
`;

export default function VariablesForm({ onSave, test, variable }) {
  const [t] = useTranslation("skills");
  const [createTestVariable] = useMutation(CREATE_TEST_VARIABLE);
  const [updateTestVariable] = useMutation(UPDATE_TEST_VARIABLE);
  const [getVariable, { loading, data, error }] = useLazyQuery(GET_VARIABLE);

  useEffect(() => {
    if (variable) getVariable({ variables: { id: parseInt(variable) } });
  }, [getVariable, variable]);

  if (variable && error) return "Não foi possível encontrar a variável";

  if (variable && loading)
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Skeleton height={56} />
        </Grid>
        <Grid item xs={12}>
          <Skeleton height={415} />
        </Grid>
      </Grid>
    );

  const onSubmit = (values, { resetForm, setSubmitting, setStatus }) => {
    let { name, description } = values;
    if (!variable)
      createTestVariable({ variables: { test, name, description } }).then(
        response => {
          if (response.errors) {
            return setStatus({ error: response.errors[0].message });
          }
          resetForm();
          setSubmitting(false);
          onSave && onSave(response.data.createTestVariable);
        }
      );

    if (variable)
      updateTestVariable({
        variables: { id: variable, name, description }
      }).then(response => {
        if (response.errors) {
          return setStatus({ error: response.errors[0].message });
        }
        setStatus({ success: true });
        setSubmitting(false);
        onSave && onSave(response.data.updateTestVariable);
      });
  };

  let variabled;
  if (data) variabled = data.variables[0];

  return (
    <Formik
      initialStatus={{ success: false }}
      initialValues={{
        name: variabled ? variabled.name : null,
        description: variabled ? variabled.description : null
      }}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ submitting, status }) => (
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {status.error && <Alert severity="error">{error}</Alert>}
              {status.success && (
                <Alert severity="success">
                  {t("Status successfully changed")}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="name"
                label={t("Name")}
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Wysiwyg
                name="description"
                label="Description"
                filesave="tests"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={submitting}
                type="submit"
                color="primary"
                variant="contained"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
