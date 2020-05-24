import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  DashboardCard,
  DashboardCardLoading
} from "app/components/dashboard-card/DashboardCard";
import gql from "graphql-tag";
import { useTranslation } from "react-i18next";

const GET_USER_LANGUAGES = gql`
  query GET_USER_LANGUAGES {
    me {
      id
      languages {
        language {
          id
        }
      }
    }
  }
`;

function SkillsCard() {
  const { data, loading } = useQuery(GET_USER_LANGUAGES);
  const [t] = useTranslation("languages");

  if (loading)
    return <DashboardCardLoading image="/static/images/languages.png" />;

  let { languages } = data.me;
  languages = languages.length;
  return (
    <DashboardCard
      image="/static/images/languages.png"
      number={languages}
      message={t("Registred languages")}
      buttonText={t("Go to languages")}
      buttonLink="/languages"
    />
  );
}

export default SkillsCard;
