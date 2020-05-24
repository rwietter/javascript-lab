import React from "react";
import { useField } from "formik";
import {
  FormGroup,
  FormControlLabel,
  Checkbox as CheckboxMUI
} from "@material-ui/core";
export default function Checkbox(props) {
  const [field] = useField(props);

  const onChange = e => {
    field.onChange({
      target: {
        id: props.id,
        name: props.name,
        value: !field.value
      }
    });
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<CheckboxMUI checked={field.value} onChange={onChange} />}
        label={props.label}
      />
    </FormGroup>
  );
}
