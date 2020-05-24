import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Hidden,
  Typography,
  Avatar,
  Popover,
  ListItem,
  Divider,
  Tooltip
} from "@material-ui/core";
import List from "@material-ui/core/List";
import { Link, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_USER, REMOVE_USER } from "queries";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  btn_infouser: {
    borderRadius: 0,
    marginLeft: 8,
    height: 64
  },
  infosuser: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: 10,
    fontFamily: "Nunito"
  },
  nome: {
    display: "flex",
    fontWeight: 600,
    textTransform: "none",
    fontSize: "15px",
    lineHeight: "15px"
  },
  email: {
    textTransform: "lowercase",
    fontSize: "12px",
    lineHeight: "12px"
  },
  popover: {
    pointerEvents: "none"
  },
  paper: {
    maxWidth: 400,
    width: "100%",
    padding: "20px 0"
  },
  avatar_user: {
    width: 70,
    height: 70
  },
  name_card: {
    fontSize: 18
  },
  email_card: {
    fontSize: 15
  },
  btn_manage: {
    margin: 15,
    textTransform: "initial"
  },
  btn_exit: {
    marginTop: 15,
    textTransform: "initial",
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.dark
    }
  },
  list_item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

function User() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [removeUser] = useMutation(REMOVE_USER);
  const [t] = useTranslation(["account", "geral"]);

  const {
    data: { user }
  } = useQuery(GET_USER);

  const handle = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    removeUser();
    history.push("/login");
  };

  const open = Boolean(anchorEl);
  const id = open ? "user-popover" : undefined;

  return (
    user && (
      <>
        <Tooltip title={t("My account")}>
          <Button
            aria-describedby={id}
            onClick={handle}
            className={classes.btn_infouser}
          >
            <Hidden smDown>
              <div className={classes.infosuser}>
                <Typography component="span" className={classes.nome}>
                  {user.firstname} {user.lastname}
                </Typography>
                <Typography className={classes.email}>{user.email}</Typography>
              </div>
            </Hidden>
            <Avatar className="">
              {user.firstname && user.firstname[0]}
              {user.lastname && user.lastname[0]}
            </Avatar>
          </Button>
        </Tooltip>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          classes={{
            paper: classes.paper
          }}
          style={{
            zIndex: 99999
          }}
        >
          <List>
            <ListItem className={classes.list_item}>
              <Avatar className={classes.avatar_user}>
                {user.firstname && user.firstname[0]}
                {user.lastname && user.lastname[0]}
              </Avatar>
              <Typography className={classes.name_card}>
                {user.firstname} {user.lastname}
              </Typography>
              <Typography className={classes.email_card}>
                {user.email}
              </Typography>
              <Link to="/account">
                <Button
                  className={classes.btn_manage}
                  size="small"
                  variant="outlined"
                >
                  {t("My account")}
                </Button>
              </Link>
            </ListItem>
            <Divider />
            <ListItem className={classes.list_item}>
              <Button
                color="primary"
                size="small"
                variant="outlined"
                onClick={() => logout()}
              >
                {t("geral:Exit")}
              </Button>
            </ListItem>
          </List>
        </Popover>
      </>
    )
  );
}
export default User;
