import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import _ from "lodash";
import { useTranslation } from "react-i18next";

function Autocomplete1(props) {
  let [field, meta] = useField(props);
  const importedProps = _.pick(props, [
    "id",
    "name",
    "options",
    "getOptionLabel",
    "onChange",
    "renderOption",
    "renderInput",
    "disabled",
    "multiple",
    "renderTags",
    "filterSelectedOptions",
    "label",
    "onTextChange",
    "freeSolo",
    "searcgText"
  ]);

  const handleChange = (e, value) => {
    let event = {
      target: {
        name: props.name,
        id: props.id,
        value: value && value
      }
    };
    field.onBlur(event);
    field.onChange(event);
    if (props.onChange) props.onChange(e, value);
  };
  return (
    <Autocomplete
      renderInput={params => (
        <TextField
          {...params}
          label={props.label}
          variant="outlined"
          fullWidth
          required={props.required}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
          onChange={e => props.onTextChange && props.onTextChange(e)}
        />
      )}
      {...importedProps}
      onChange={handleChange}
      value={field.value}
    />
  );
}

export default function Autocomplete2(props) {
  const [t] = useTranslation("formik");
  return (
    <Autocomplete1
      {...props}
      required={false}
      label={props.required ? `${props.label}*` : props.label}
      validate={value => {
        return (
          (props.required &&
            (!value || value.length === 0) &&
            t("This field is required")) ||
          (props.validate && props.validate(value))
        );
      }}
    />
  );
}
