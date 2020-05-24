import gql from "graphql-tag";

import layout from "./layout.schema";
import alert from "./alert.schema";

const files = [layout, alert];

//carrega os arquivos de schema
let schema = gql`
  type Mutation
  type Query
`;
schema = schema.loc.source.body;

files.forEach(file => {
  schema += file.loc.source.body + " \n\n ";
});

export default schema;
