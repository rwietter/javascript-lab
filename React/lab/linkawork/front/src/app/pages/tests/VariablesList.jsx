import React, { forwardRef, useImperativeHandle } from "react";
import { Grid, Card, CardHeader, CardContent } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import EditMenu from "app/components/layout/EditMenu";

const DELETE_TEST_VARIABLE = gql`
  mutation DELETE_TEST_VARIABLE($id: ID!) {
    daleteTestVariable(id: $id) {
      id
    }
  }
`;

const GET_VARIABLES = gql`
  query GET_VARIABLES($id: ID!) {
    tests(id: $id) {
      id
      variables {
        id
        name
        description
      }
    }
  }
`;

const VariablesList = forwardRef(({ id, edit }, ref) => {
  const { data, loading, refetch } = useQuery(GET_VARIABLES, {
    variables: { id }
  });
  const [deleteTestVariable] = useMutation(DELETE_TEST_VARIABLE);
  const [t] = useTranslation("skills");

  useImperativeHandle(ref, () => ({
    refetch
  }));

  if (loading) return t("Loading...");

  let { variables } = data.tests[0];

  if (!variables || variables.length < 1)
    return t("This test dont have a variables");

  return (
    <Grid container spacing={3}>
      {variables.map(item => (
        <Grid item key={item.id} xs={12} sm={6}>
          <Card>
            <CardHeader
              title={item.name}
              action={
                <EditMenu
                  edit={() => edit(item.id)}
                  delete={() =>
                    deleteTestVariable({
                      variables: { id: item.id }
                    }).then(() => refetch())
                  }
                />
              }
            />
            {item.description && (
              <CardContent>
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
              </CardContent>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
});

export default VariablesList;
