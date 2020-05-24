import React from "react";
import { AuthHidden } from "@linka";
import { Grid, Typography } from "@material-ui/core";
import { GET_USER } from "queries";
import { useQuery } from "@apollo/react-hooks";
import SkillsCard from "./cards/SkillsCard";
import SkillsAdminCard from "./cards/SkillsAdminCard";
import LanguagesCard from "./cards/LanguagesCard";
import ExperiencesCard from "./cards/ExperiencesCard";
import { useTranslation } from "react-i18next";

function Home() {
  const {
    data: { user }
  } = useQuery(GET_USER);
  const [t] = useTranslation("home");
  return (
    <>
      <Typography variant="h4">
        {t("wellcome")}, {user.firstname}
      </Typography>
      <br />
      <Grid container spacing={3}>
        <AuthHidden name="skills-user">
          <Grid item xs={12} sm={6} lg={3}>
            <SkillsCard />
          </Grid>
        </AuthHidden>
        <AuthHidden name="skills-admin">
          <Grid item xs={12} sm={6} lg={3}>
            <SkillsAdminCard />
          </Grid>
        </AuthHidden>
        <AuthHidden name="languages-route">
          <Grid item xs={12} sm={6} lg={3}>
            <LanguagesCard />
          </Grid>
        </AuthHidden>
        <AuthHidden name="skills-admin">
          <Grid item xs={12} sm={6} lg={3}>
            <ExperiencesCard />
          </Grid>
        </AuthHidden>
      </Grid>
    </>
  );
}

export default Home;
