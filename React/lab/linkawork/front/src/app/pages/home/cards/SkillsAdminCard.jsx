import React from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/react-hooks";
import {
  DashboardCard,
  DashboardCardLoading
} from "app/components/dashboard-card/DashboardCard";
import gql from "graphql-tag";

const GET_SKILLS = gql`
  query GET_SKILLS {
    skills {
      id
    }
  }
`;

function SkillsCard() {
  const { data, loading } = useQuery(GET_SKILLS);
  const [t] = useTranslation("skills");

  if (loading)
    return <DashboardCardLoading image="/static/images/skills.png" />;

  let { skills } = data;
  skills = skills.length;
  return (
    <DashboardCard
      image="/static/images/skills.png"
      number={skills}
      message={t("Registred_skills")}
      buttonText={t("Go_to_skills")}
      buttonLink="/skills"
      admin
    />
  );
}

export default SkillsCard;
