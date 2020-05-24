import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { Grid, Card, CardHeader, CardContent } from "@material-ui/core";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import TestForm from "./TestForm";
import EditMenu from "app/components/layout/EditMenu";
import { useHistory } from "react-router-dom";

const TESTS = gql`
  query TESTS {
    tests {
      id
      name
      description
    }
  }
`;

const DELETE_TEST = gql`
  mutation DELETE_TEST($id: ID!) {
    deleteTest(id: $id) {
      id
    }
  }
`;

const TestList = forwardRef((props, ref) => {
  const { data, loading, refetch } = useQuery(TESTS);
  const [deleteTest] = useMutation(DELETE_TEST);
  const history = useHistory();

  useImperativeHandle(ref, () => ({
    refetch
  }));

  if (loading) return "Carregando avaliações...";

  let { tests } = data;
  return (
    <Grid container spacing={3}>
      {tests.length < 1 && <Grid item>Nenhum teste cadastrado</Grid>}
      {tests.map((item, key) => (
        <Grid key={key} item xs={12} sm={4}>
          <Card>
            <CardHeader
              title={item.name}
              action={
                <EditMenu
                  edit={() => history.push(`/tests/${item.id}`)}
                  delete={() =>
                    deleteTest({ variables: { id: item.id } }).then(
                      response => {
                        if (response.errors) {
                          alert({
                            variables: {
                              message: response.errors[0].message,
                              variant: "error",
                              horizontal: "right"
                            }
                          });
                          return;
                        }
                        refetch();
                      }
                    )
                  }
                />
              }
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
});

export default function Tests() {
  const testsRef = useRef(null);

  return (
    <Card>
      <CardHeader title="Tests" />
      <CardContent>
        <TestForm
          onSave={() => {
            testsRef.current.refetch();
          }}
        />
      </CardContent>
      <CardContent>
        <TestList ref={testsRef} />
      </CardContent>
    </Card>
  );
}
