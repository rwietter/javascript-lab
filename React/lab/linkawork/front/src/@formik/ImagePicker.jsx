import React from "react";
import { useField } from "formik";
import { useTranslation } from "react-i18next";
import ImagePicker from "app/components/ImagePicker/ImagePicker";

function Component(props) {
  const [field, meta] = useField(props);

  const handleChange = file => {
    let target = {
      target: {
        id: props.id,
        name: props.name,
        value: file || null
      }
    };

    field.onChange(target);
    //field.onBlur(target);
    if (props.onChange) {
      props.onChange(file);
    }
  };
  return (
    <ImagePicker
      {...props}
      error={meta.toched && Boolean(meta.error)}
      onChange={handleChange}
      onRemove={handleChange}
    />
  );
}

export default function Picker(props) {
  const [t] = useTranslation("formik");
  return (
    <Component
      {...props}
      validate={value => {
        console.log(value);
        return props.required && !value && t("This field is required");
      }}
    />
  );
}
