import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Tooltip,
  Fab,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import LanguagesList from "./LanguagesList";
import { Add as AddIcon } from "@material-ui/icons";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Autocomplete, Select } from "@formik";

const GET_LANGUAGES = gql`
  query GET_LANGUAGES {
    languages {
      id
      name
      description
      code
      image
    }
  }
`;

const useStyles = makeStyles(theme => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  }
}));

function LanguagesSelect(props) {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_LANGUAGES);

  return (
    <Autocomplete
      {...props}
      options={data && data.languages}
      getOptionLabel={option => option.name}
      renderOption={(option, { selected }) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar src={option.image} className={classes.small}>
              {option.code.substring(0, 2)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={option.name} />
        </ListItem>
      )}
      disabled={loading || error}
    />
  );
}

const loadLevels = levels => {
  if (!levels) return [];
  return levels.map(item => {
    return {
      value: item.id,
      text: item.name
    };
  });
};

const GET_LANGUAGE_LEVELS = gql`
  query GET_LANGUAGE_LEVELS {
    languageLevels {
      id
      name
      description
    }
  }
`;

function LevelSelect(props) {
  const { loading, error, data } = useQuery(GET_LANGUAGE_LEVELS);
  return (
    <Select
      {...props}
      itens={loadLevels(data && data.languageLevels)}
      disabled={loading || error}
    />
  );
}

const SET_USER_LANGUAGE = gql`
  mutation SET_USER_LANGUAGE($language: ID!, $level: Int!) {
    setUserLanguage(language: $language, level: $level)
  }
`;

function Languages() {
  const languagesRef = useRef(null);
  const [setUserLanguage] = useMutation(SET_USER_LANGUAGE);
  const [t] = useTranslation(["languages", "geral"]);

  return (
    <Card>
      <CardHeader title={t("New language")} />
      <CardContent>
        <Formik
          initialValues={{
            language: null,
            level: null
          }}
          onSubmit={(values, { resetForm, setValues, setSubmitting }) => {
            setUserLanguage({
              variables: {
                language: values.language.id,
                level: parseInt(values.level)
              }
            }).then(() => {
              languagesRef.current.refetch();
              setSubmitting(false);
              resetForm();
            });
          }}
        >
          {({ isValid, isSubmitting }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <LanguagesSelect
                    required
                    name="language"
                    label={t("Language")}
                    valueKey="id"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <LevelSelect
                    name="level"
                    label={t("Level")}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item>
                  <Tooltip
                    title="Add"
                    aria-label="Add"
                    disabled={!isValid || isSubmitting}
                  >
                    <Fab color="primary" type="submit">
                      <AddIcon />
                    </Fab>
                  </Tooltip>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </CardContent>
      <CardHeader title={t("Languages")} />
      <CardContent>
        <LanguagesList ref={languagesRef} />
      </CardContent>
    </Card>
  );
}

export default Languages;
