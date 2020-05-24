import fetch from "../config/apollo-fetch";
import gql from "graphql-tag";
import {
  LOGIN,
  CREATE_TEST,
  UPDATE_TEST,
  DELETE_TEST,
  CREATE_TEST_VARIABLE,
  UPDATE_TEST_VARIABLE,
  DELETE_TEST_VARIABLE
} from "./queries";

let user_token: any, test_id: any, variable_id: any;
describe("Tests", () => {
  test("Login", () =>
    fetch()
      .mutate({
        mutation: LOGIN,
        variables: {
          email: "matheusvmallmann@gmail.com",
          password: "123456789"
        }
      })
      .then(response => {
        let { id, token } = response.data.login;
        expect(id).toBe("2");
        user_token = token;
      })
      .catch(() => {
        expect(2).toBe(1);
      }));

  test("Create a test", () =>
    fetch(user_token)
      .mutate({
        mutation: CREATE_TEST,
        variables: {
          name: "A test test",
          description: "This is a test",
          type: "profile"
        }
      })
      .then(response => {
        let { id, name } = response.data.createTest;
        test_id = id;
        expect(name).toBe("A test test");
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Update a test", () =>
    fetch(user_token)
      .mutate({
        mutation: UPDATE_TEST,
        variables: {
          id: test_id,
          name: "A test test edited",
          description: "This is a test"
        }
      })
      .then(response => {
        let { name } = response.data.updateTest;
        expect(name).toBe("A test test edited");
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Create a test variable", () =>
    fetch(user_token)
      .mutate({
        mutation: CREATE_TEST_VARIABLE,
        variables: {
          test: test_id,
          name: "Variable test",
          description: "This is a variable test"
        }
      })
      .then(response => {
        let { id, name } = response.data.createTestVariable;
        variable_id = id;
        expect(name).toBe("Variable test");
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Update a test variable", () =>
    fetch(user_token)
      .mutate({
        mutation: UPDATE_TEST_VARIABLE,
        variables: {
          id: variable_id,
          name: "Variable test edited",
          description: "This is a variable test edited"
        }
      })
      .then(response => {
        let { name } = response.data.updateTestVariable;
        expect(name).toBe("Variable test edited");
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Delete a test variable", () =>
    fetch(user_token)
      .mutate({
        mutation: DELETE_TEST_VARIABLE,
        variables: {
          id: 1
        }
      })
      .then(response => {
        expect(2).toBe(1);
      })
      .catch(error => {
        expect(error.graphQLErrors[0].message).toBe("Variável não encontrada");
      }));

  test("Delete a test variable success", () =>
    fetch(user_token)
      .mutate({
        mutation: DELETE_TEST_VARIABLE,
        variables: {
          id: variable_id
        }
      })
      .then(response => {
        let { id } = response.data.daleteTestVariable;
        expect(id).toBe(variable_id);
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Delete a test", () =>
    fetch(user_token)
      .mutate({
        mutation: DELETE_TEST,
        variables: {
          id: test_id
        }
      })
      .then(response => {
        let { id } = response.data.deleteTest;
        expect(id).toBe(test_id);
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));
});
