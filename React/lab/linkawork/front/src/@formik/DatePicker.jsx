import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { enUS, ptBR } from "date-fns/locale";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useField } from "formik";
import _ from "lodash";

const localeMap = {
  enUS,
  ptBR
};

export default function MaterialUIPickers(props) {
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
    "type",
    "variant",
    "margin",
    "format",
    "inputVariant",
    "openTo",
    "views",
    "disableFuture",
    "minDate",
    "maxDate",
    "onMonthChange"
  ]);

  const handleChange = value => {
    let event = { currentTarget: { name: props.name, id: props.id, value } };
    field.onChange(event);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap['ptBR']}>
      <DatePicker
        {...field}
        {...importedProps}
        onChange={handleChange}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    </MuiPickersUtilsProvider>
  );
}
