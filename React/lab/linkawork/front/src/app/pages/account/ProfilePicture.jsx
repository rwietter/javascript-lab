import React from "react";
import { Button } from "@material-ui/core";
import { Formik, Form, ImagePicker } from "@formik";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Skeleton from "react-loading-skeleton";

const ME = gql`
  query ME {
    me {
      image {
        url
      }
    }
  }
`;

function ProfilePicture(props) {
  const { loading } = useQuery(ME);
  return (
    <Formik enableReinitialize initialValues={{ image: null }}>
      {({ isValid }) => (
        <Form>
          {loading ? (
            <Skeleton width={180} height={180} circle />
          ) : (
            <ImagePicker name="image" width={180} height={180} required />
          )}
          <Button color="primary" variant="contained" disabled={!isValid}>
            Salvar
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ProfilePicture;
