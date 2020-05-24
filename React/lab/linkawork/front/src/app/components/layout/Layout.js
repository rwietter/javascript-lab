import React, { useState, useEffect } from "react";
import clsx from "clsx";
import hexToRgba from "hex-to-rgba";
import { withRouter } from "react-router-dom";
//routes
import routes from "routes";
import AppBar from "./AppBar";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Hidden,
  List,
  CssBaseline,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Tooltip
} from "@material-ui/core";
//router dom
import { Link, matchPath } from "react-router-dom";

//layout components
import Loader from "./Loader";
import Alert from "./Alert";

import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { GET_USER } from "queries";

import { useTranslation } from "react-i18next";

//tamanho da sidenav
const drawerWidth = 256;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    zIndex: 1
  },
  drawerIsOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: 62
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    marginTop: 64,
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    height: "calc(100vh - 64px)",
    overflow: "auto"
  },
  content_padding: {
    padding: 10
  },
  menuItem: {
    maxHeight: 40,
    borderRadius: "0 20px 20px 0"
  },
  menuItemActive: {
    backgroundColor: hexToRgba(theme.palette.primary.main, 0.3),
    color: theme.palette.primary.main
  },
  menuItemIconActive: {
    color: theme.palette.primary.main
  }
}));

const GET_DRAWER_OPEN = gql`
  query DrawerOpen {
    drawerIsOpen @client
  }
`;

const TOGGLE_DRAWER = gql`
  mutation ToggleDrawer {
    toggleDrawer @client
  }
`;

function Layout({ children, history, location }) {
  const classes = useStyles();
  const {
    data: { drawerIsOpen }
  } = useQuery(GET_DRAWER_OPEN);
  const [toggleDrawer] = useMutation(TOGGLE_DRAWER);
  const [padding, setPadding] = useState(true);
  const {
    data: { user }
  } = useQuery(GET_USER);
  const [width, setWidth] = useState(window.innerWidth);
  const [t] = useTranslation(["routes", "layout"]);

  const loadMenu = () => {
    return routes
      .filter(item => {
        return (
          item.menuItem &&
          user &&
          (item.auth === true || user.auths.indexOf(item.auth) >= 0)
        );
      })
      .map(item => {
        return {
          ...item,
          active: item.path === location.pathname
        };
      });
  };

  useEffect(() => {
    if (location) {
      let route = routes.filter(item =>
        matchPath(location.pathname, {
          path: item.path,
          exact: item.exact ? true : false
        })
      );
      if (route && route.length > 0) {
        route = route[0];
        if (route.padding !== undefined) setPadding(route.padding);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (width <= 960) toggleDrawer({ variables: { open: false } });
  }, [width, toggleDrawer]);

  const nav = (
    <>
      <List>
        <Hidden mdUp>
          <Link to="/">
            <ListItem align="center">
              <Typography
                style={{
                  fontSize: 20
                }}
                color="primary"
              >
                {t("layout:linkawork_name")}
              </Typography>
            </ListItem>
          </Link>
        </Hidden>
        {loadMenu().map((item, index) => (
          <Link
            onClick={width <= 960 && toggleDrawer}
            key={index}
            to={item.path}
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.54)" }}
          >
            {!drawerIsOpen ? (
              <Tooltip title={t(item.name)} placement="right">
                <ListItem
                  button
                  className={`${classes.menuItem} ${
                    item.active ? classes.menuItemActive : null
                  }`}
                >
                  <ListItemIcon
                    className={item.active ? classes.menuItemIconActive : ""}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={t(item.name)} />
                </ListItem>
              </Tooltip>
            ) : (
              <ListItem
                button
                className={`${classes.menuItem} ${
                  item.active ? classes.menuItemActive : null
                }`}
              >
                <ListItemIcon
                  className={item.active ? classes.menuItemIconActive : ""}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={t(item.name)} />
              </ListItem>
            )}
          </Link>
        ))}
      </List>
      <Divider />
      <Typography variant="caption" display="block" align="center" gutterBottom>
        &copy; 2019 Linkawork.
      </Typography>
    </>
  );

  const hasNavigation = () => {
    let route = routes.filter(item => {
      let match = matchPath(history.location.pathname, {
        path: item.path,
        exact: item.exact
      });
      return match != null ? true : false;
    })[0];
    return route ? (route.hasOwnProperty("nav") ? route.nav : true) : false;
  };

  return (
    <>
      <Loader />
      <Alert />
      {hasNavigation() ? (
        <>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar />

            <Hidden smDown>
              <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                  [classes.drawerOpen]: drawerIsOpen,
                  [classes.drawerClose]: !drawerIsOpen
                })}
                classes={{
                  paper: clsx(classes.drawer, {
                    [classes.drawerOpen]: drawerIsOpen,
                    [classes.drawerClose]: !drawerIsOpen
                  })
                }}
                open={drawerIsOpen}
              >
                <div className={classes.toolbar} />
                {nav}
              </Drawer>
            </Hidden>
            <Hidden mdUp>
              <Drawer
                classes={{
                  paper: classes.drawer
                }}
                open={drawerIsOpen}
                onClose={toggleDrawer}
              >
                {nav}
              </Drawer>
            </Hidden>

            <main
              className={classes.content}
              style={{ padding: padding === true ? 10 : padding && padding }}
            >
              {children}
            </main>
          </div>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default withRouter(Layout);
