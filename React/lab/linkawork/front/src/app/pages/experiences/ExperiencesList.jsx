import React, { forwardRef, useImperativeHandle } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  makeStyles,
  useTheme,
  Avatar,
  Chip,
  IconButton,
  CardHeader,
  CardContent
} from "@material-ui/core";
import { WorkOutline, Star, DeleteOutlined } from "@material-ui/icons";
import { format } from "date-fns";

const GET_EXPERIENCES = gql`
  query GET_EXPERIENCES {
    me {
      id
      experiences {
        id
        initial_date
        final_date
        company_name
        company {
          firstname
        }
        position {
          name
        }
        description
        skills {
          id
          name
          image
        }
      }
    }
  }
`;

const DELETE_EXPERIENCE = gql`
  mutation DELETE_EXPERIENCE($id: ID!) {
    deleteExperience(id: $id)
  }
`;

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(0.5)
  }
}));

const ExperiencesList = forwardRef((props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const [deleteExperience] = useMutation(DELETE_EXPERIENCE);
  const { data, loading, refetch } = useQuery(GET_EXPERIENCES);

  useImperativeHandle(ref, () => ({
    refetch
  }));

  if (loading) return "Loading...";

  let { experiences } = data.me;

  if (experiences.length < 1) return "You dont have a experiences";

  return (
    <div style={{ backgroundColor: "#ddd" }}>
      <VerticalTimeline layout="1-column">
        {experiences.map((item, key) => (
          <VerticalTimelineElement
            key={key}
            className="vertical-timeline-element--work"
            iconStyle={{
              background: theme.palette.primary.main,
              color: "#fff"
            }}
            icon={<WorkOutline />}
          >
            <CardHeader
              title={item.position.name}
              subheader={item.company.firstname || item.company_name}
              action={
                <IconButton
                  onClick={() => {
                    deleteExperience({ variables: { id: item.id } }).then(
                      () => {
                        refetch();
                      }
                    );
                  }}
                >
                  <DeleteOutlined />
                </IconButton>
              }
            />
            <CardContent>
              {item.description}

              <div>
                {item.skills.map((item, key) => (
                  <Chip
                    key={key}
                    size="small"
                    color="primary"
                    label={item.name}
                    avatar={<Avatar src={item.image}>{item.name[0]}</Avatar>}
                    className={classes.chip}
                  />
                ))}
              </div>

              <small>{`${format(new Date(item.initial_date), "MM/yyyy")} - ${
                item.final_date
                  ? format(new Date(item.final_date), "MM/yyyy")
                  : "present"
              }`}</small>
            </CardContent>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: theme.palette.primary.main, color: "#fff" }}
          icon={<Star />}
        />
      </VerticalTimeline>
    </div>
  );
});

export default ExperiencesList;
