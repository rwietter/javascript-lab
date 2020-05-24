import React from "react";
import {
  Grid,
  makeStyles,
  createStyles,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";
import { withTranslation } from "react-i18next";

import LanguageSelect from "../../pages/language/LanguageSelect";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    space: {
      minHeight: theme.spacing(15)
    }
  })
);

function Header({ t }) {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar variant="regular">
            <Grid
              container
              direction="row-reverse"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item md={2}>
                <Typography
                  color="textSecondary"
                  style={{ fontWeight: "bold", fontSize: 25 }}
                >
                  {t("linkawork")}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={7}
              direction="row"
              justify="flex-end"
              alignItems="flex-start"
            >
              <LanguageSelect />
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
}
export default withTranslation("geral")(Header);
