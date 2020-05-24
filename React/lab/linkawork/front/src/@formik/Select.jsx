import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  OutlinedInput
} from "@material-ui/core";
import { useField } from "formik";
import _ from "lodash";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  marginLabel: {
    marginTop: -8
  }
}));

function Select1(props) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [field, meta] = useField(props);
  const [t] = useTranslation("formik");

  const importedProps = _.pick(props, [
    "autoWidth",
    "children",
    "classes",
    "displayEmpty",
    "input",
    "inputProps",
    "MenuProps",
    "multiple",
    "native",
    "onChange",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "value",
    "variant",
    "margin",
    "required"
  ]);

  const handleChange = event => {
    field.onChange({
      target: {
        id: props.id,
        name: props.name,
        value: event.target.value || null
      }
    });
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <FormControl
      variant="outlined"
      error={meta.touched && Boolean(meta.error)}
      className={classes.formControl}
      margin={importedProps.margin}
    >
      <InputLabel ref={inputLabel} htmlFor={props.label}>
        {props.label}
        {props.required && " *"}
      </InputLabel>
      <Select
        {...importedProps}
        {...field}
        value={field.value}
        onChange={handleChange}
        input={<OutlinedInput labelWidth={props.label.length * 8} />}
      >
        <MenuItem value="">{t("Select")}</MenuItem>
        {props.itens.map((item, key) => (
          <MenuItem key={key} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && Boolean(meta.error) && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}

function LinkaSelect(props) {
  const [t] = useTranslation("formik");
  return (
    <Select1
      {...props}
      validate={value =>
        props.required && !value && t("This field is required")
      }
    />
  );
}

export default LinkaSelect;
