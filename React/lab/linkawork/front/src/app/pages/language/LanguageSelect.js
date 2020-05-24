import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Select, MenuItem } from "@material-ui/core";
const languages = require("translation/languages.json");

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    fontSize: 8
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  resize: {
    fontSize: 15
  }
}));

function LanguageSelect() {
  const classes = useStyles();
  let language = "pt_br";

  return (
    <>
      <FormControl className={classes.formControl}>
        <Select value={language} onChange={e => {}} style={{ fontSize: 15 }}>
          {languages.map((item, key) => (
            <MenuItem key={key} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default LanguageSelect;
