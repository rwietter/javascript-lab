import React from "react";
import { TextField as TextFieldMUI } from "@material-ui/core";
import { mask } from "./masks";
import _ from "lodash";
import { useField } from "formik";
import { useTranslation } from "react-i18next";

function TextField(props) {
  const [field, meta] = useField(props);

  const importedProps = _.pick(props, [
    "value",
    "autoComplete",
    "autoFocus",
    "children",
    "className",
    "defaultValue",
    "disabled",
    "FormHelperTextProps",
    "fullWidth",
    "id",
    "InputLabelProps",
    "inputProps",
    "InputProps",
    "inputRef",
    "label",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "placeholder",
    "required",
    "rows",
    "rowsMax",
    "select",
    "SelectProps",
    "type",
    "variant",
    "mask",
    "margin"
  ]);

  const onChange = event => {
    let val;
    if (props.mask) {
      val = mask(props.mask, event.currentTarget.value);
    } else {
      val = event.currentTarget.value;
    }
    event.target.value = val;
    field.onChange(event);
    if (!meta.touched) field.onBlur(event);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <TextFieldMUI
      {...field}
      {...importedProps}
      onChange={onChange}
      value={field.value || ""}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
}

function RequiredTextField(props) {
  const [t] = useTranslation("formik");
  return (
    <TextField
      {...props}
      validate={value =>
        (props.required &&
          (!value || value.length === 0) &&
          t("This field is required")) ||
        (props.validate && props.validate(value))
      }
    />
  );
}

export default RequiredTextField;
