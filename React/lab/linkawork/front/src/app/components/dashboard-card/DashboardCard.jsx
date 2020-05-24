import React from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Button,
  Chip,
  Tooltip
} from "@material-ui/core";
import { Settings as SettingsIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const useStyles = makeStyles(theme => ({
  icon: {
    width: 80,
    position: "absolute",
    transform: "rotate(-15deg)",
    bottom: "-5px",
    right: "-5px"
  },
  admin_badge: {
    position: "absolute",
    right: 5,
    top: 5
  }
}));

export function DashboardCard({
  number,
  message,
  buttonText,
  buttonLink,
  image,
  admin
}) {
  const classes = useStyles();

  return (
    <Card style={{ position: "relative" }}>
      <img alt="Icon card content" src={image} className={classes.icon} />
      {admin && (
        <Tooltip title="Administrator card" className={classes.admin_badge}>
          <Chip
            color="primary"
            size="small"
            icon={<SettingsIcon />}
            label="Admin"
          />
        </Tooltip>
      )}
      <CardContent>
        <Typography variant="h3">{number}</Typography>
        <Typography variant="h6">{message}</Typography>
        <Link to={buttonLink}>
          <Button color="primary" variant="outlined" size="small">
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export function DashboardCardLoading({ image }) {
  const classes = useStyles();

  return (
    <Card style={{ position: "relative" }}>
      <img alt="Icon card content" src={image} className={classes.icon} />
      <CardContent>
        <Skeleton width={100} height={50} />
        <Skeleton height={20} />
        <Skeleton height={25} width={90} />
      </CardContent>
    </Card>
  );
}
