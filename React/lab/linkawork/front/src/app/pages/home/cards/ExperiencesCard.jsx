import React from "react";
import {
  DashboardCard,
  DashboardCardLoading
} from "app/components/dashboard-card/DashboardCard";
import { useTranslation } from "react-i18next";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_USER_EXPERIENCES = gql`
  query GET_USER_EXPERIENCES {
    me {
      id
      experiences {
        id
      }
    }
  }
`;

export default function ExperiencesCard(props) {
  const { data, loading } = useQuery(GET_USER_EXPERIENCES);
  const [t] = useTranslation("experiences");

  if (loading)
    return <DashboardCardLoading image="/static/images/experiences.png" />;

  let { experiences } = data.me;
  experiences = experiences.length;

  return (
    <DashboardCard
      image="/static/images/experiences.png"
      number={experiences}
      message={t("Registred experiences")}
      buttonText={t("Go to experiences")}
      buttonLink="/experiences"
    />
  );
}
