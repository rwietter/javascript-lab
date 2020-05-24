import React, { useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Formik, Form, Wysiwyg, Skeleton, Select, Checkbox } from "@formik";
import { useTranslation } from "react-i18next";
import gql from "graphql-tag";
import { useMutation, useLazyQuery } from "@apollo/react-hooks";

const CREATE_TEST_QUESTION = gql`
  mutation CREATE_TEST_QUESTION(
    $test: ID!
    $description: String!
    $type: String!
    $multiple: Boolean
  ) {
    createTestQuestion(
      test: $test
      description: $description
      type: $type
      multiple: $multiple
    ) {
      id
      description
    }
  }
`;

const UPDATE_TEST_QUESTION = gql`
  mutation CREATE_TEST_QUESTION(
    $id: ID!
    $description: String
    $type: String
    $multiple: Boolean
  ) {
    updateTestQuestion(
      id: $id
      description: $description
      type: $type
      multiple: $multiple
    ) {
      id
      description
      type
      multiple
    }
  }
`;

const GET_QUESTIONS = gql`
  query GET_QUESTIONS($id: ID!) {
    questions(id: $id) {
      id
      description
      type
      multiple
    }
  }
`;

export default function VariablesForm({ onSave, test, question }) {
  const [t] = useTranslation("skills");
  const [createTestQuestion] = useMutation(CREATE_TEST_QUESTION);
  const [updateTestQuestion] = useMutation(UPDATE_TEST_QUESTION);
  const [getQuestion, { loading, data, error }] = useLazyQuery(GET_QUESTIONS);

  useEffect(() => {
    if (question) getQuestion({ variables: { id: parseInt(question) } });
  }, [getQuestion, question]);

  if (question && error) return "Não foi possível encontrar a variável";

  if (question && loading)
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
    let { description, type, multiple } = values;
    if (!question)
      createTestQuestion({
        variables: { test, description, type, multiple }
      }).then(response => {
        if (response.errors) {
          return setStatus({ error: response.errors[0].message });
        }
        resetForm();
        setSubmitting(false);
        onSave && onSave(response.data.createTestQuestion);
      });

    if (question)
      updateTestQuestion({
        variables: { id: question, description, type, multiple }
      }).then(response => {
        if (response.errors) {
          return setStatus({ error: response.errors[0].message });
        }
        setStatus({ success: true });
        setSubmitting(false);
        onSave && onSave(response.data.updateTestQuestion);
      });
  };

  let questiond;
  if (data) questiond = data.questions[0];

  return (
    <Formik
      initialStatus={{ success: false }}
      initialValues={{
        description: (questiond && questiond.description) || null,
        type: (questiond && questiond.type) || null,
        multiple: (questiond && questiond.multiple) || null
      }}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ submitting, status, values }) => (
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
              <Wysiwyg name="description" label="Question" filesave="tests" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Select
                name="type"
                label="Type"
                itens={[
                  { value: "descriptive", text: "Descriptive" },
                  { value: "objective", text: "Objective" }
                ]}
              />
            </Grid>
            {values.type === "objective" && (
              <Grid item xs={12} md={6}>
                <Checkbox name="multiple" label="Multiple" color="primary" />
              </Grid>
            )}
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
