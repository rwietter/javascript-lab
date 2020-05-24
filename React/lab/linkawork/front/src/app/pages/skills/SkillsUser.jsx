import React, { forwardRef, useImperativeHandle } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardHeader,
  Grid,
  Avatar,
  IconButton,
  Tooltip
} from "@material-ui/core";
import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useTheme } from "@material-ui/styles";
import StarRatings from "react-star-ratings";
import { ClearRounded as ClearRoundedIcon } from "@material-ui/icons";
import Skeleton from "react-loading-skeleton";

const GET_USER_SKILLS = gql`
  query GET_USER_SKILLS {
    me {
      id
      skills {
        stars
        skill {
          id
          name
          description
          image
        }
      }
    }
  }
`;

const DELETE_USER_SKILL = gql`
  mutation DELETE_USER_SKILL($skill: ID!) {
    deleteUserSkill(skill: $skill) {
      stars
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

//list a user skills
const SkillsUser = forwardRef((props, ref) => {
  const { loading, error, data, refetch } = useQuery(GET_USER_SKILLS);
  const [deleteUserSkill] = useMutation(DELETE_USER_SKILL);
  const [setUserSkill] = useMutation(SET_USER_SKILL);
  const theme = useTheme();
  const [t] = useTranslation("skills");

  useImperativeHandle(ref, () => ({
    refetch
  }));

  if (loading) return <Skeleton height={50} />;
  if (error) {
    console.error(error);
    return t("informationNotFound");
  }
  let { skills } = data.me;
  if (skills.length < 1) return t("noSkills");

  return (
    <Grid container spacing={3}>
      {skills.map((item, key) => (
        <Grid key={key} item xs={12} md={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar src={item.skill.image}>{item.skill.name[0]}</Avatar>
              }
              title={item.skill.name}
              subheader={
                <StarRatings
                  numberOfStars={5}
                  rating={item.stars}
                  starDimension="20px"
                  starSpacing="5px"
                  name="rating"
                  starRatedColor={theme.palette.primary.main}
                  starHoverColor={theme.palette.primary.dark}
                  changeRating={stars =>
                    setUserSkill({
                      variables: { skill: item.skill.id, stars }
                    }).then(() => {
                      refetch();
                    })
                  }
                />
              }
              action={
                <Tooltip title={t("Remove")} aria-label="remove">
                  <IconButton
                    onClick={() =>
                      deleteUserSkill({
                        variables: { skill: item.skill.id }
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
export default SkillsUser;
