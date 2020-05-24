import React from "react";
import { Formik as Form } from "formik";

export default function Formik(props) {
  return <Form isInitialValid={false} validateOnChange {...props} />;
}
