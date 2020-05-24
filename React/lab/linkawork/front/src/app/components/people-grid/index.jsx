import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "./people_grid.css";
import { useTranslation } from "react-i18next";

function PeopleGrid(props) {
  const { t } = useTranslation("people_grid");
  return (
    <Grid justify="center" alignItems="center" container className="background">
      <Grid item xs={12}>
        <Typography>{t("wellcome")}</Typography>
      </Grid>
      <Grid item className="faces">
        {[...Array(9)].map((item, key) => (
          <div key={key} className="avatar">
            <div className="peopleIcon"></div>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

export default PeopleGrid;
