import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  CheckCircle,
  Error as ErrorIcon,
  Info,
  Close,
  Warning
} from "@material-ui/icons";
import { amber, green } from "@material-ui/core/colors";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const variantIcon = {
  success: CheckCircle,
  warning: Warning,
  error: ErrorIcon,
  info: Info
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, variant, message, onClose, ...other } = props;

  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <Close className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};

const ALERT = gql`
  query {
    alert @client {
      active
      message
      variant
      vertical
      horizontal
      duration
    }
  }
`;

const CLOSE_ALERT = gql`
  mutation CloseAlert {
    closeAlert @client
  }
`;

function Alert() {
  const [closeAlert] = useMutation(CLOSE_ALERT);
  let {
    data: { alert }
  } = useQuery(ALERT);

  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
    setTimeout(() => {
      closeAlert();
      setClose(false);
    }, 100);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: alert.vertical || "top",
        horizontal: alert.horizontal || "left"
      }}
      open={alert.active && !close}
      autoHideDuration={alert.duration || 3000}
      onClose={handleClose}
      style={{ zIndex: 9999999 }}
    >
      <MySnackbarContentWrapper
        onClose={handleClose}
        variant={alert.variant || "success"}
        message={alert.message}
      />
    </Snackbar>
  );
}
export default Alert;
