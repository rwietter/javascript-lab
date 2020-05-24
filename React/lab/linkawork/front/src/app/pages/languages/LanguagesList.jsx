import React, { forwardRef, useImperativeHandle } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardHeader,
  Grid,
  Tooltip,
  IconButton,
  Avatar
} from "@material-ui/core";
import gql from "graphql-tag";
import Skeleton from "react-loading-skeleton";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { ClearRounded as ClearRoundedIcon } from "@material-ui/icons";

const GET_USER_LANGAUGES = gql`
  query GET_USER_LANGAUGES {
    me {
      id
      languages {
        language {
          id
          name
          code
          image
        }
        level {
          id
          name
          description
        }
      }
    }
  }
`;

const DELETE_USER_LANGUAGE = gql`
  mutation DELETE_USER_LANGUAGE($id: ID!) {
    deleteUserLanguage(language: $id)
  }
`;

const LanguagesList = forwardRef((props, ref) => {
  const { loading, error, data, refetch } = useQuery(GET_USER_LANGAUGES);
  const [deleteUserLanguage] = useMutation(DELETE_USER_LANGUAGE);
  const [t] = useTranslation(["geral", "language"]);

  useImperativeHandle(ref, () => ({
    refetch
  }));

  if (loading)
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Skeleton height={50} />
        </Grid>
      </Grid>
    );

  if (error) {
    console.error(error);
    return t("Unable to fetch information");
  }

  let { languages } = data.me;

  if (languages.length < 1) return t("No data found");

  return (
    <Grid container spacing={3}>
      {languages.map((item, key) => (
        <Grid key={key} item xs={12} md={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar src={item.language.image}>
                  {item.language.code.substring(0, 2)}
                </Avatar>
              }
              title={item.language.name}
              subheader={item.level.name}
              action={
                <Tooltip title={t("Remove")} aria-label="remove">
                  <IconButton
                    onClick={() =>
                      deleteUserLanguage({
                        variables: { id: item.language.id }
                      }).then(() => {
                        refetch();
                      })
                    }
                  >
                    <ClearRoundedIcon />
                  </IconButton>
                </Tooltip>
              }
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
});

export default LanguagesList;
