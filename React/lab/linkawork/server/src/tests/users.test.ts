import * as faker from "faker";
import fetch from "../config/apollo-fetch";
import gql from "graphql-tag";
import { LOGIN, REGISTER, DESTROY_TOKEN, ME } from "./queries";
let user_id: number, user_email: string, user_token: string;

describe("Register", () => {
  test("Invalid email", () =>
    fetch()
      .mutate({
        mutation: REGISTER,
        variables: {
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName(),
          type: "physical",
          email: faker.name.firstName(),
          password: "123456789"
        }
      })
      .then(() => {
        expect(2).toBe(1);
      })
      .catch(error => {
        expect(error.graphQLErrors[0].message).toBe("Email inválido");
      }));

  test("Invalid password", () =>
    fetch()
      .mutate({
        mutation: REGISTER,
        variables: {
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName(),
          type: "physical",
          email: faker.internet.email(),
          password: "1234"
        }
      })
      .then(() => {
        expect(2).toBe(1);
      })
      .catch(error => {
        expect(error.graphQLErrors[0].message).toBe("Senha inválida");
      }));

  test("Invalid type", () =>
    fetch()
      .mutate({
        mutation: REGISTER,
        variables: {
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName(),
          type: "phy",
          email: faker.internet.email(),
          password: "1234456789"
        }
      })
      .then(() => {
        expect(2).toBe(1);
      })
      .catch(error => {
        expect(error.graphQLErrors[0].message).toBe("Tipo inválido");
      }));

  test("registered successfully", () =>
    fetch()
      .mutate({
        mutation: REGISTER,
        variables: {
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName(),
          type: "physical",
          email: faker.internet.email(),
          password: "1234456789"
        }
      })
      .then(response => {
        let { id } = response.data.createAccount;
        expect(parseInt(id)).toBeGreaterThan(1);
        user_id = response.data.createAccount.id;
        user_email = response.data.createAccount.email;
      })
      .catch(() => {
        expect(2).toBe(1);
      }));

  test("E-mail already registered", () =>
    fetch()
      .mutate({
        mutation: REGISTER,
        variables: {
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName(),
          type: "physical",
          email: user_email,
          password: "1234456789"
        }
      })
      .then(() => {
        expect(2).toBe(1);
      })
      .catch(error => {
        expect(error.graphQLErrors[0].message).toBe("Email já cadastrado");
      }));
});

describe("Login", () => {
  test("Unregistered Email", () =>
    fetch()
      .mutate({
        mutation: LOGIN,
        variables: {
          email: "asfdfsdfsdffsfsdf",
          password: "123456789"
        }
      })
      .then(() => {
        expect(2).toBe(1);
      })
      .catch(error => {
        expect(error.graphQLErrors[0].message).toBe("Email não cadastrado");
      }));

  test("Incorrect password", () =>
    fetch()
      .mutate({
        mutation: LOGIN,
        variables: {
          email: user_email,
          password: "1224878/94564"
        }
      })
      .then(() => {
        expect(2).toBe(1);
      })
      .catch(error => {
        expect(error.graphQLErrors[0].message).toBe("Senha incorreta");
      }));

  test("Successfully logged in", () =>
    fetch()
      .mutate({
        mutation: LOGIN,
        variables: {
          email: user_email,
          password: "1234456789"
        }
      })
      .then(response => {
        let { id } = response.data.login;
        expect(id).toBe(user_id);
        user_token = response.data.login.token;
      })
      .catch(() => {
        expect(2).toBe(1);
      }));
});

describe("verify token", () => {
  test("Invalid token", () =>
    fetch("dsffsdfsdf")
      .query({
        query: ME
      })
      .then(() => {
        expect(2).toBe(1);
      })
      .catch(error => {
        expect(error.graphQLErrors[0].message).toBe("Usuário não autenticado");
      }));

  test("Valid token", () =>
    fetch(user_token)
      .query({
        query: ME
      })
      .then(response => {
        expect(response.data.me.id).toBe(user_id);
        expect(response.data.me.email).toBe(user_email);
      })
      .catch(() => {
        expect(2).toBe(1);
      }));
});

describe("Destroy token", () => {
  test("Token destroyed", () =>
    fetch(user_token)
      .mutate({
        mutation: DESTROY_TOKEN
      })
      .then(response => {
        let { destroyToken } = response.data;
        expect(destroyToken).toBe(true);
      })
      .catch(() => {
        expect(2).toBe(1);
      }));

  test("Invalid token", () =>
    fetch(user_token)
      .mutate({
        mutation: DESTROY_TOKEN
      })
      .then(() => {
        expect(2).toBe(1);
      })
      .catch(error => {
        expect(error.graphQLErrors[0].message).toBe("Usuário não autenticado");
      }));
});
