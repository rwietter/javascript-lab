import React from "react";
import {
  makeStyles,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import { Autocomplete } from "@formik";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_SKILLS = gql`
  query GET_SKILLS {
    skills {
      id
      name
      description
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

function SelectSkill(props) {
  const classes = useStyles();
  const { loading, data } = useQuery(GET_SKILLS);
  return (
    <Autocomplete
      options={data && data.skills}
      getOptionLabel={option => option.name}
      renderOption={(option, { selected }) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar src={option.image} className={classes.small}>
              {option.name[0]}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={option.name} />
        </ListItem>
      )}
      disabled={loading}
      {...props}
    />
  );
}
export default SelectSkill;
