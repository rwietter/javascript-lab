import React from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/react-hooks";
import {
  DashboardCard,
  DashboardCardLoading
} from "app/components/dashboard-card/DashboardCard";
import gql from "graphql-tag";

const GET_USER_SKILLS = gql`
  query GET_USER_SKILLS {
    me {
      id
      skills {
        stars
      }
    }
  }
`;

function SkillsCard() {
  const [t] = useTranslation("skills");
  const { data, loading } = useQuery(GET_USER_SKILLS);

  if (loading)
    return <DashboardCardLoading image="/static/images/skills.png" />;

  let { skills } = data.me;
  skills = skills.length;
  return (
    <DashboardCard
      image="/static/images/skills.png"
      number={skills}
      message={t("Registred_skills")}
      buttonText={t("Go_to_skills")}
      buttonLink="/skills"
    />
  );
}

export default SkillsCard;
