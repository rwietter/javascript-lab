import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Grid, Button } from "@material-ui/core";
import gql from "graphql-tag";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import { ALERT } from "queries";
import Skeleton from "react-loading-skeleton";
import { Formik, Form, TextField, ImagePicker } from "@formik";
import { Alert } from "@material-ui/lab";

export const CREATE_SKILL = gql`
  mutation CREATE_SKILL($name: String!, $description: String, $image: Upload) {
    createSkill(name: $name, description: $description, image: $image) {
      id
    }
  }
`;

const UPDATE_SKILL = gql`
  mutation UPDATE_SKILL(
    $id: ID
    $name: String!
    $description: String
    $image: Upload
  ) {
    updateSkill(
      id: $id
      name: $name
      description: $description
      image: $image
    ) {
      id
    }
  }
`;

const GET_SKILL = gql`
  query GET_SKILL($id: ID!) {
    skills(id: $id) {
      id
      name
      description
      image
    }
  }
`;

function SkillForm({ id, onSave }) {
  const [createSkill] = useMutation(CREATE_SKILL);
  const [updateSkill] = useMutation(UPDATE_SKILL);
  //alert
  const [alert] = useMutation(ALERT);
  const [getSkill, { loading, data }] = useLazyQuery(GET_SKILL);

  const [t] = useTranslation("skills");

  useEffect(() => {
    if (id) getSkill({ variables: { id } });
  }, [getSkill, id]);

  if (id && loading)
    return (
      <Grid container>
        <Grid item sm={3} xs={12}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Skeleton circle={true} height={150} width={150} />
          </Grid>
        </Grid>
        <Grid item sm={9} xs={12}>
          <Skeleton height={56} />
          <Skeleton height={92} />
        </Grid>
      </Grid>
    );

  let skill;
  if (data) skill = data.skills[0];

  const onSubmit = (model, { resetForm, setSubmitting, setStatus }) => {
    let req = null;
    if (id) {
      let variables = { id, ...model };
      req = updateSkill({ variables });
    } else {
      req = createSkill({ variables: { ...model } });
    }

    req.then(response => {
      if (response.errors) {
        alert({
          variables: {
            message: response.errors[0].message,
            variant: t("error"),
            horizontal: t("right")
          }
        });
      } else {
        setStatus({ success: true });
        if (!id) {
          resetForm({});
        }
        onSave && onSave();
      }
      setSubmitting(false);
    });
  };

  return (
    <Formik
      isInitialValid={false}
      initialStatus={{ success: false }}
      initialValues={{
        image: null,
        name: skill && skill.name,
        description: skill && skill.description
      }}
      onSubmit={onSubmit}
    >
      {({ isValid, isSubmitting, status }) => (
        <Form>
          <Grid container>
            <Grid item xs={12}>
              {status.success && (
                <Alert severity="success">
                  {t("Skill successfully changed")}
                </Alert>
              )}
            </Grid>
            <Grid item sm={3} xs={12}>
              <Grid container justify="center">
                <ImagePicker name="image" width={180} height={180} />
              </Grid>
            </Grid>
            <Grid item sm={9}>
              <TextField
                type="text"
                name="name"
                label={t("Name")}
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="description"
                label={t("Description")}
                margin="normal"
                variant="outlined"
                fullWidth
                multiline
                rows="2"
              />
            </Grid>

            <Grid item xs={12}>
              <Grid container direction="row" justify="flex-end">
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{
                      textTransform: "initial",
                      width: "100%",
                      marginRight: 8
                    }}
                    disabled={!isValid || isSubmitting}
                  >
                    {t("save")}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default SkillForm;
