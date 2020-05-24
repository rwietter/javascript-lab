import React from "react";
import DebugFormik from "./DebugFormik";
import { Form as FormikForm } from "formik";
export default function Form(props) {
  return (
    <FormikForm {...props}>
      <DebugFormik defaultOpen={props.debug} />
      {props.children}
    </FormikForm>
  );
}
