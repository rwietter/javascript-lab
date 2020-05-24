import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Tabs,
  Tab
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  InfoOutlined as InfoIcon,
  PhotoCameraOutlined as PhotoCameraIcon
} from "@material-ui/icons";
//páginas
import Informations from "app/pages/account/Informations";
import ProfilePicture from "app/pages/account/ProfilePicture";

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Raleway",
    fontSize: 35,
    color: "#686868"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
    fontVariant: "small-caps"
  },
  box: {
    marginTop: 25,
    marginBottom: 25
  },
  tab: {
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    fontSize: 17
  },
  tabIcon: {
    marginRight: 8,
    width: 20,
    height: 20
  },
  tabPanel: {
    padding: theme.spacing(1)
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <div className={classes.box}>{children}</div>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function Account(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [t] = useTranslation("account");

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Card>
      <CardHeader title={t("profile_and_settings")} />
      <CardContent>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            id="informations"
            label={
              <div className={classes.tab}>
                <InfoIcon className={classes.tabIcon} /> {t("informations")}
              </div>
            }
          />

          <Tab
            id="profile_picture"
            label={
              <div className={classes.tab}>
                <PhotoCameraIcon className={classes.tabIcon} />{" "}
                {t("profile_picture")}
              </div>
            }
          />
        </Tabs>
        <TabPanel value={value} classeName={classes.tabPanel} index={0}>
          <Informations />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProfilePicture />
        </TabPanel>
      </CardContent>
    </Card>
  );
}

export default Account;
