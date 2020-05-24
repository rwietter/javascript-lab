import fetch from "../config/apollo-fetch";
import {
  LOGIN,
  CREATE_POSITION,
  UPDATE_POSITION,
  DELETE_POSITION,
  GET_POSITION
} from "./queries";
let user_token: any, position_id: any;

describe("Login", () => {
  test("Successfully logged in", () =>
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
});

describe("Positions", () => {
  test("Create a position", () =>
    fetch(user_token)
      .mutate({
        mutation: CREATE_POSITION,
        variables: {
          name: "Test position",
          description: "A test position"
        }
      })
      .then(response => {
        let { id, name, description } = response.data.createPosition;
        expect(name).toBe("Test position");
        expect(description).toBe("A test position");
        position_id = id;
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Update a position", () =>
    fetch(user_token)
      .mutate({
        mutation: UPDATE_POSITION,
        variables: {
          id: position_id,
          name: "Test position altered",
          description: "A test position altered"
        }
      })
      .then(response => {
        let { name, description } = response.data.updatePosition;
        expect(name).toBe("Test position altered");
        expect(description).toBe("A test position altered");
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Select a position", () =>
    fetch(user_token)
      .mutate({
        mutation: GET_POSITION,
        variables: {
          id: position_id
        }
      })
      .then(response => {
        let { positions } = response.data;
        expect(positions.length).toBeGreaterThanOrEqual(1);
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Delete a position", () =>
    fetch(user_token)
      .mutate({
        mutation: DELETE_POSITION,
        variables: {
          id: position_id
        }
      })
      .then(response => {
        let { id } = response.data.deletePosition;
        expect(id).toBe(position_id);
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));
});
