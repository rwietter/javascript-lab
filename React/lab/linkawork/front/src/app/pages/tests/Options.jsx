import React from "react";
import { Button } from "@material-ui/core";
import OptionsList from "./OptionsList";
export default function Options(props) {
  return (
    <div>
      <Button color="primary" variant="contained">
        New Option
      </Button>
      <OptionsList options={props.options} />
    </div>
  );
}
