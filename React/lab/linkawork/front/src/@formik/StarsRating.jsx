import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, FormHelperText } from "@material-ui/core";
import StarRatings from "react-star-ratings";
import { useField } from "formik";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  formControl: {
    width: "100%"
  }
}));

function StarsRating(props) {
  const classes = useStyles();
  const [field, meta] = useField(props);

  const handleChange = value => {
    field.onChange({
      target: {
        id: props.id,
        name: props.name,
        value
      }
    });
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <FormControl
      variant="outlined"
      error={meta.touched && Boolean(meta.error)}
      className={classes.formControl}
      margin={props.margin}
    >
      <StarRatings
        {...props}
        rating={field.value}
        changeRating={handleChange}
      />
      {meta.touched && Boolean(meta.error) && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}

export default function StarsRatingRequired(props) {
  const [t] = useTranslation("formik");
  return (
    <StarsRating
      {...props}
      validate={value =>
        props.required && value < 1 && t("This field is required")
      }
    />
  );
}
