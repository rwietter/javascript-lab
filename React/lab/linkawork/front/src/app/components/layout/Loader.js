import React from "react";
import { LinearProgress } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_LOADER = gql`
  query GetLoader {
    loader @client
  }
`;

function Loader() {
  const {
    data: { loader }
  } = useQuery(GET_LOADER);
  return loader && <LinearProgress color="secondary" />;
}

export default Loader;
