import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  InputAdornment,
  Typography,
  Hidden
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import Notifications from "./Notifications";
import User from "./User";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center"
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      zIndex: 2
    },
    boxShadow: "none",
    borderBottom: "1px solid #ddd"
  },
  toolbar: {
    paddingLeft: 16,
    [theme.breakpoints.down("md")]: {
      paddingRight: 0
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    maxWidth: 500,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    },
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.54)"
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    },
    color: "rgba(0, 0, 0, 0.54)"
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  logo: {
    [theme.breakpoints.up("md")]: {
      width: 234
    },
    display: "flex",
    alignItems: "center"
  },
  searchbar: {
    width: "100%",
    maxWidth: 500
  }
}));

const TOGGLE_DRAWER = gql`
  mutation {
    toggleDrawer @client
  }
`;

function Bar() {
  const classes = useStyles();
  const [toggleDrawer] = useMutation(TOGGLE_DRAWER);
  const [t] = useTranslation("layout");

  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Hidden smDown>
            <Typography
              style={{
                fontSize: 20
              }}
              color="primary"
            >
              {t("linkawork_name")}
            </Typography>
          </Hidden>
        </div>

        <div className={classes.grow}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Pesquisar"
            className={classes.searchbar}
            margin="dense"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    <SearchIcon></SearchIcon>
                  </IconButton>
                </InputAdornment>
              )
            }}
          ></TextField>
        </div>

        <div className={classes.sectionDesktop}>
          <Notifications />
        </div>
        <User />
      </Toolbar>
    </AppBar>
  );
}

export default Bar;
