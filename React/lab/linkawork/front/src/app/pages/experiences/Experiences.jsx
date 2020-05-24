import React, { useState, useEffect, useRef } from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Chip,
  Avatar,
  InputAdornment,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import {
  Formik,
  Form,
  Autocomplete,
  DatePicker,
  Checkbox,
  TextField
} from "@formik";
import SelectSkill from "app/components/skills/SelectSkill";
import { TodayOutlined } from "@material-ui/icons";
import gql from "graphql-tag";
import { useQuery, useLazyQuery, useMutation } from "@apollo/react-hooks";
import ExperiencesList from "./ExperiencesList";

const useStyles = makeStyles(theme => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  }
}));

const GET_LEGAL_USERS = gql`
  query GET_LEGAL_USERS($search: String!, $limit: Int, $offset: Int) {
    legalUsers(search: $search, limit: $limit, offset: $offset) {
      id
      firstname
      image
    }
  }
`;

function SelectCompany(props) {
  const classes = useStyles();
  const [getLegalUsers, { loading, data }] = useLazyQuery(GET_LEGAL_USERS);

  useEffect(() => {
    if (props.searchCompany)
      getLegalUsers({ variables: { search: props.searchCompany } });
  }, [props.searchCompany, getLegalUsers]);
  return (
    <Autocomplete
      options={data && data.legalUsers}
      getOptionLabel={option => option.firstname || option}
      loading={loading}
      renderOption={option => (
        <ListItem>
          <ListItemAvatar>
            <Avatar src={option.image} className={classes.small}>
              {option.firstname[0]}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={option.firstname} />
        </ListItem>
      )}
      {...props}
      freeSolo
    />
  );
}

const GET_POSITIONS = gql`
  query GET_POSITIONS {
    positions {
      id
      name
      description
    }
  }
`;

function SelectPositions(props) {
  const { data, loading } = useQuery(GET_POSITIONS);

  return (
    <Autocomplete
      options={data && data.positions}
      getOptionLabel={option => option.name}
      loading={loading}
      renderOption={option =>
        option && (
          <ListItem>
            <ListItemText primary={option.name} />
          </ListItem>
        )
      }
      {...props}
      freeSolo
    />
  );
}

const CREATE_EXPERIENCE = gql`
  mutation CREATE_EXPERIENCE(
    $company: ID
    $company_name: String
    $position: ID
    $position_name: String
    $description: String
    $initial_date: Date!
    $final_date: Date
  ) {
    createExperience(
      company: $company
      company_name: $company_name
      position: $position
      position_name: $position_name
      description: $description
      initial_date: $initial_date
      final_date: $final_date
    ) {
      id
    }
  }
`;

const SET_EXPERIENCE_SKILL = gql`
  mutation SET_EXPERIENCE_SKILL($experience: ID!, $skill: ID!) {
    setExperienceSkill(experience: $experience, skill: $skill)
  }
`;

export default function Experiences() {
  const list = useRef(null);
  const [t] = useTranslation("experiences");
  const [searchCompany, setSearchCompany] = useState(null);
  const [createExperience] = useMutation(CREATE_EXPERIENCE);
  const [setExperienceSkill] = useMutation(SET_EXPERIENCE_SKILL);

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    createExperience({
      variables: {
        company: values.company.id || null,
        company_name: values.company.firstname || values.company,
        position: values.position.id > 0 && values.position.id,
        position_name: values.position.name,
        description: values.description,
        initial_date: values.initial_date,
        final_date: values.current ? null : values.final_date
      }
    }).then(response => {
      let { id: experience_id } = response.data.createExperience;
      values.skills.map(({ id }) => {
        setExperienceSkill({
          variables: { experience: experience_id, skill: id }
        });
        return { id };
      });
      list.current.refetch();
      resetForm();
    });
  };

  return (
    <Card>
      <CardHeader title={t("Professional experiences")} />
      <CardContent>
        <Formik
          initialValues={{
            company: "",
            initial_date: null,
            final_date: null,
            current: false,
            skills: [],
            description: null,
            position: ""
          }}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, isValid }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item md={4} sm={6} xs={12}>
                  <SelectCompany
                    name="company"
                    label={t("Company")}
                    fullWidth
                    searchCompany={searchCompany}
                    onTextChange={e => {
                      setSearchCompany(e.target.value);
                    }}
                    required
                  />
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                  <DatePicker
                    name="initial_date"
                    label={t("Initial date")}
                    inputVariant="outlined"
                    openTo="year"
                    format="MM/yyyy"
                    views={["year", "month"]}
                    disableFuture
                    fullWidth
                    maxDate={values.final_date || new Date()}
                    placeholder={t("Select date")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TodayOutlined />
                        </InputAdornment>
                      )
                    }}
                    required
                  />
                </Grid>

                <Grid item md={4} sm={6} xs={12}>
                  <DatePicker
                    name="final_date"
                    label={t("Final date")}
                    inputVariant="outlined"
                    openTo="year"
                    format="MM/yyyy"
                    views={["year", "month"]}
                    disableFuture
                    minDate={values.initial_date || new Date("1900-01-01")}
                    disabled={values.current}
                    fullWidth
                    placeholder={t("Select date")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TodayOutlined />
                        </InputAdornment>
                      )
                    }}
                  />
                  <Checkbox
                    label={t("Actual job")}
                    color="primary"
                    name="current"
                    onChange={() => setFieldValue("final_date", null)}
                  />
                </Grid>

                <Grid item xs={12} md={4} sm={12}>
                  <SelectPositions
                    name="position"
                    label={t("Position")}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={8} sm={12}>
                  <SelectSkill
                    multiple
                    name="skills"
                    label={t("Skills")}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          avatar={
                            <Avatar src={option.image}>{option.name[0]}</Avatar>
                          }
                          label={option.name}
                          color="primary"
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    validate={value =>
                      value.length < 2 && t("Select at least 2 skills")
                    }
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="description"
                    multiline
                    label={t("Description")}
                    variant="outlined"
                    rows="2"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    disabled={
                      !isValid || (!values.final_date && !values.current)
                    }
                    color="primary"
                    variant="contained"
                    type="submit"
                  >
                    {t("Save")}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </CardContent>
      <CardContent>
        <ExperiencesList ref={list} />
      </CardContent>
    </Card>
  );
}
