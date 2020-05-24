import React, { useState } from "react";
import {
  IconButton,
  Badge,
  Popover,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Tooltip
} from "@material-ui/core";
import { NotificationsOutlined as NotificationsIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0
  },
  popover: {
    pointerEvents: "none"
  },
  paper: {
    maxWidth: 400,
    width: "100%"
  },
  unread: {
    borderLeftColor: theme.palette.primary.main,
    borderLeftStyle: "solid",
    borderLeftWidth: 4
  },
  read: {
    borderLeftWidth: 4,
    borderLeftStyle: "solid",
    borderLeftColor: "#ddd"
  },
  text: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical"
  }
}));

const notifications = [
  {
    title: "Teste",
    firstname: "Matheus Vinicius",
    lastname: "Mallmann",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    readed: false
  },
  {
    title: "Teste 2",
    firstname: "Matheus Vinicius",
    lastname: "Mallmann",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    readed: true
  }
];

function Notifications() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [t] = useTranslation("notifications");

  const handle = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "notifications-popover" : undefined;

  return (
    <React.Fragment>
      <Tooltip title={t("Notifications")}>
        <IconButton
          aria-describedby={id}
          variant="contained"
          onClick={handle}
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={notifications.length} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
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
        <List className={classes.root} dense>
          {notifications.map((item, key) => (
            <ListItem
              key={key}
              alignItems="flex-start"
              className={!item.readed ? classes.unread : classes.read}
            >
              <ListItemAvatar>
                <Avatar alt={item.username}>
                  {item.firstname && item.firstname[0]}
                  {item.lastname && item.lastname[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <div className={classes.text}>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {item.firstname} {item.lastname}
                    </Typography>{" "}
                    {item.description}
                  </div>
                }
              />
            </ListItem>
          ))}
        </List>
      </Popover>
    </React.Fragment>
  );
}

export default Notifications;
