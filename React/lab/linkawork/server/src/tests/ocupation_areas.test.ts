import fetch from "../config/apollo-fetch";
import {
  LOGIN,
  CREATE_OCUPATION_AREA,
  UPDATE_OCUPATION_AREA,
  DELETE_OCUPATION_AREA,
  GET_OCUPATION_AREAS
} from "./queries";
let user_token: any, ocupation_area_id: any;

describe("Ocupation areas", () => {
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

  test("Create", () =>
    fetch(user_token)
      .mutate({
        mutation: CREATE_OCUPATION_AREA,
        variables: {
          name: "A test Ocupation Area",
          description: "A test ocupation area"
        }
      })
      .then(response => {
        let { id, name, description } = response.data.createOcupationArea;
        expect(name).toBe("A test Ocupation Area");
        expect(description).toBe("A test ocupation area");
        ocupation_area_id = id;
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Update", () =>
    fetch(user_token)
      .mutate({
        mutation: UPDATE_OCUPATION_AREA,
        variables: {
          id: ocupation_area_id,
          name: "Altered test Ocupation Area",
          description: "Altered test Ocupation Area"
        }
      })
      .then(response => {
        let { name, description } = response.data.updateOcupationArea;
        expect(name).toBe("Altered test Ocupation Area");
        expect(description).toBe("Altered test Ocupation Area");
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Get", () =>
    fetch(user_token)
      .query({
        query: GET_OCUPATION_AREAS,
        variables: {
          id: ocupation_area_id
        }
      })
      .then(response => {
        let { name, description } = response.data.ocupationAreas[0];
        expect(name).toBe("Altered test Ocupation Area");
        expect(description).toBe("Altered test Ocupation Area");
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Delete", () =>
    fetch(user_token)
      .mutate({
        mutation: DELETE_OCUPATION_AREA,
        variables: {
          id: ocupation_area_id
        }
      })
      .then(response => {
        let { name, description } = response.data.deleteOcupationArea;
        expect(name).toBe("Altered test Ocupation Area");
        expect(description).toBe("Altered test Ocupation Area");
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));
});
