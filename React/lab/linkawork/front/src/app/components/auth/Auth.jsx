import React, { useEffect, useState } from "react";
import { useLocation, matchPath, useHistory, Link } from "react-router-dom";
import routes from "routes";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { makeStyles, createStyles, Button } from "@material-ui/core";
import { GET_USER, SET_USER, GET_ME, REMOVE_USER } from "queries";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme =>
  createStyles({
    ops: {
      fontSize: 50
    },
    container: {
      display: "flex",
      width: "100vw",
      height: "100vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    errorCode: {
      fontSize: 150,
      color: theme.palette.primary.main
    },
    message: {
      fontSize: 30
    },
    button: {
      marginTop: 30
    }
  })
);

function Auth(props) {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const me = useQuery(GET_ME);
  const {
    data: { user }
  } = useQuery(GET_USER);
  const [auth, setAuth] = useState(false);
  const [loader, setLoader] = useState(true);
  const [setUser] = useMutation(SET_USER);
  const [removeUser] = useMutation(REMOVE_USER);
  const [t] = useTranslation(["error_auth404", "routes"]);
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    let { data, error, loading } = me;
    if (!localStorage.getItem("token") && !sessionStorage.getItem("token")) {
      setVerify(true);
      return;
    }
    if (!loading) {
      if (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        removeUser();
        history.push("/login");
        setVerify(true);
        return;
      }
      let { auths, firstname, lastname, email } = data.me;
      auths = JSON.stringify(auths);
      auths = btoa(auths);
      let user = JSON.stringify({ firstname, lastname, email, auths });
      if (localStorage.getItem("token")) {
        localStorage.setItem("user", user);
      } else if (sessionStorage.getItem("token")) {
        sessionStorage.setItem("user", user);
      }
      setVerify(true);
    }
  }, [me, history, removeUser, setVerify]);

  useEffect(() => {
    //get language of browser
    /*let sessionLang = localStorage.getItem("lang");
    let userLang =
      sessionLang ||
      navigator.userLanguage ||
      navigator.language.replace("-", "_").toLowerCase();*/

    //get user
    let user = localStorage.getItem("user") || sessionStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      let auths = atob(user.auths);
      auths = JSON.parse(auths);
      setUser({ variables: { ...user, auths } });
    }
  }, [setUser]);

  useEffect(() => {
    setLoader(true);
    if (location) {
      let route = routes.filter(item =>
        matchPath(location.pathname, {
          path: item.path,
          exact: item.exact ? true : false
        })
      );
      setAuth(false);
      if (route && route.length < 1) {
        setAuth(true);
        setLoader(false);
        return;
      }
      route = route[0];
      if (route && route.name)
        document.title = `${t("routes:" + route.name)} - Linkawork`;
      if (verify && !user && route.path === "/") history.push("/login");
      if (user && route.noAuth === true) history.push("/");
      if (!user && route.noAuth === true) setAuth(true);
      if (user && route.auth === true) setAuth(true);
      if (user && user.auths.indexOf(route.auth) >= 0) setAuth(true);
    }
    setLoader(false);
  }, [location, user, history, t, verify]);

  return (
    !loader &&
    (auth ? (
      <>{props.children}</>
    ) : (
      <div className={classes.container}>
        <div className={classes.ops}>Ooops!</div>
        <div className={classes.errorCode}>401</div>
        <div className={classes.message}>{t("auth401message")}</div>
        <div className={classes.button}>
          <Link to="/">
            <Button variant="contained" color="primary">
              {t("initial_page")}
            </Button>
          </Link>
        </div>
      </div>
    ))
  );
}

export default Auth;
