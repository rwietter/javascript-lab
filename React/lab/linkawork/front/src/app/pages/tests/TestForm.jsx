import React, { useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Formik, Form, TextField, Wysiwyg, Skeleton } from "@formik";
import { useTranslation } from "react-i18next";
import gql from "graphql-tag";
import { useMutation, useLazyQuery } from "@apollo/react-hooks";

const CREATE_TEST = gql`
  mutation CREATE_TEST($name: String!, $description: String, $type: String!) {
    createTest(name: $name, description: $description, type: $type) {
      id
      name
      description
      type
    }
  }
`;

const UPDATE_TEST = gql`
  mutation UPDATE_TEST(
    $id: ID!
    $name: String!
    $description: String
    $type: String
  ) {
    updateTest(id: $id, name: $name, description: $description, type: $type) {
      id
      name
      description
      type
    }
  }
`;

const GET_TEST = gql`
  query GET_TEST($id: ID!) {
    tests(id: $id) {
      id
      name
      description
    }
  }
`;

export default function TestForm({ id, onSave }) {
  const [t] = useTranslation("skills");
  const [createTest] = useMutation(CREATE_TEST);
  const [updateTest] = useMutation(UPDATE_TEST);
  const [getTest, { loading, data, error }] = useLazyQuery(GET_TEST);

  useEffect(() => {
    if (id) getTest({ variables: { id: parseInt(id) } });
  }, [getTest, id]);

  if (id && error) return error;

  if (id && loading)
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
    if (!id)
      createTest({ variables: { name, description, type: "profile" } }).then(
        response => {
          if (response.errors) {
            return setStatus({ error: response.errors[0].message });
          }
          resetForm();
          setSubmitting(false);
          onSave && onSave(response.data.createTest);
        }
      );

    if (id)
      updateTest({ variables: { id, name, description } }).then(response => {
        if (response.errors) {
          return setStatus({ error: response.errors[0].message });
        }
        setStatus({ success: true });
        setSubmitting(false);
        onSave && onSave(response.data.createTest);
      });
  };

  let test;
  if (data) test = data.tests[0];

  return (
    <Formik
      initialStatus={{ success: false }}
      initialValues={{
        name: (test && test.name) || null,
        description: (test && test.description) || null
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
