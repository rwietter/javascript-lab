import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Tooltip,
  Fab,
  Typography
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";

import { AuthHidden } from "@linka";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import SelectSkill from "app/components/skills/SelectSkill";
import SkillsUser from "./SkillsUser";
import SkillsAdmin from "./SkillsAdmin";
import SkillForm from "./SkillForm";
import { Formik, Form, StarRatings } from "@formik";

export const CREATE_SKILL = gql`
  mutation CREATE_SKILL($name: String!, $description: String, $image: Upload) {
    createSkill(name: $name, description: $description, image: $image) {
      id
    }
  }
`;

const SET_USER_SKILL = gql`
  mutation SET_USER_SKILL($skill: ID!, $stars: Int!) {
    setUserSkill(skill: $skill, stars: $stars) {
      stars
    }
  }
`;

function Skills() {
  const skillsUserRef = useRef();
  const skillsAdminRef = useRef(null);
  const theme = useTheme();
  const [t] = useTranslation("skills");
  const [setUserSkill] = useMutation(SET_USER_SKILL);

  return (
    <>
      {/*SKILLS ADMIN*/}
      <AuthHidden name="skills-admin">
        <Card>
          <CardHeader title={t("Skills admin")} />
          <CardContent>
            <AuthHidden name="skills-create">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6">{t("create_skill")}</Typography>
                  <SkillForm onSave={() => skillsAdminRef.current.refetch()} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">{t("skills")}</Typography>
                  <SkillsAdmin ref={skillsAdminRef} />
                </Grid>
              </Grid>
            </AuthHidden>
          </CardContent>
        </Card>
      </AuthHidden>

      {/*USER SKILLS*/}
      <AuthHidden name="skills-user">
        <Card>
          <CardHeader title={t("Skills")} />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6">{t("add_new_skill")}</Typography>
                <Formik
                  initialValues={{
                    skill: "",
                    stars: 0
                  }}
                  onSubmit={(values, { resetForm, setSubmitting }) => {
                    setUserSkill({
                      variables: {
                        skill: values.skill.id,
                        stars: values.stars
                      }
                    }).then(result => {
                      skillsUserRef.current.refetch();
                      setSubmitting(false);
                      resetForm();
                    });
                  }}
                >
                  {({ isValid }) => (
                    <Form>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={3}>
                          <SelectSkill
                            name="skill"
                            label={t("Skill")}
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item>
                          <StarRatings
                            numberOfStars={5}
                            name="stars"
                            starRatedColor={theme.palette.primary.main}
                            starHoverColor={theme.palette.primary.dark}
                            required
                          />
                        </Grid>
                        <Grid item>
                          <Tooltip
                            title={t("Add")}
                            aria-label="Add"
                            disabled={!isValid}
                          >
                            <Fab type="submit" color="primary">
                              <AddIcon />
                            </Fab>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">{t("your_skills")}</Typography>
                <SkillsUser ref={skillsUserRef} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </AuthHidden>
    </>
  );
}
export default Skills;
