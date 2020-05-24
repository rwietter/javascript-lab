import React, { useState, forwardRef, useImperativeHandle } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardHeader,
  Grid,
  Avatar,
  IconButton,
  Tooltip,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  ClearRounded as ClearRoundedIcon,
  MoreVert as MoreVertIcon,
  EditOutlined as EditOutlinedIcon
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

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

export const DELETE_SKILL = gql`
  mutation DELETE_SKILL($id: ID!) {
    deleteSkill(id: $id) {
      id
    }
  }
`;

//list a admin skills
const SkillsAdmin = forwardRef((props, ref) => {
  const [t] = useTranslation("skills");
  const { loading, error, data, refetch } = useQuery(GET_SKILLS);
  const [anchorEl, setAnchorEl] = useState({
    anchor: null,
    id: null
  });
  const [deleteSkill] = useMutation(DELETE_SKILL);

  useImperativeHandle(ref, () => ({
    refetch
  }));

  if (loading) return <Skeleton height={50} />;
  if (error) {
    console.error(error);
    return t("informationNotFound");
  }
  let { skills } = data;
  if (skills.length < 1) return t("noSkills");

  return (
    <Grid container spacing={3}>
      {skills.map((item, key) => (
        <Grid key={key} item xs={12} md={4}>
          <Card>
            <CardHeader
              avatar={<Avatar src={item.image}>{item.name[0]}</Avatar>}
              title={item.name}
              subheader={item.description}
              action={
                <>
                  <Tooltip
                    title={t("Edit and delete")}
                    aria-label="Edit and delete"
                  >
                    <IconButton
                      aria-controls={`menu-${item.id}`}
                      aria-haspopup="true"
                      onClick={e =>
                        setAnchorEl({ anchor: e.currentTarget, id: item.id })
                      }
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    id={`menu-${item.id}`}
                    anchorEl={anchorEl.anchor}
                    keepMounted
                    open={anchorEl.id === item.id}
                    onClose={() =>
                      setAnchorEl({
                        anchor: null,
                        id: null
                      })
                    }
                    getContentAnchorEl={null}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center"
                    }}
                  >
                    <Link
                      to={`/skills/${item.id}`}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <MenuItem>
                        <ListItemIcon>
                          <EditOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">{t("edit")}</Typography>
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={() => {
                        deleteSkill({ variables: { id: item.id } }).then(() => {
                          setAnchorEl({
                            anchor: null,
                            id: null
                          });
                          refetch();
                        });
                      }}
                    >
                      <ListItemIcon>
                        <ClearRoundedIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="inherit">{t("delete")}</Typography>
                    </MenuItem>
                  </Menu>
                </>
              }
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
});
export default SkillsAdmin;
