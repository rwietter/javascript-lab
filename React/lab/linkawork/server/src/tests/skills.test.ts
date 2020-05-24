import fetch from "../config/apollo-fetch";
import {
  LOGIN,
  CREATE_SKILL,
  UPDATE_SKILL,
  DELETE_SKILL,
  GET_SKILL,
  SET_USER_SKILL,
  DELETE_USER_SKILL
} from "./queries";
let user_token: any, skill_id: any;

describe("Skills Login", () => {
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

describe("Skills", () => {
  test("Create a skill", () =>
    fetch(user_token)
      .mutate({
        mutation: CREATE_SKILL,
        variables: {
          name: "Test skill",
          description: "A test skill"
        }
      })
      .then(response => {
        let { id, name, description } = response.data.createSkill;
        expect(name).toBe("Test skill");
        expect(description).toBe("A test skill");
        skill_id = id;
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Update a skill", () =>
    fetch(user_token)
      .mutate({
        mutation: UPDATE_SKILL,
        variables: {
          id: skill_id,
          name: "Test skill altered",
          description: "A test skill altered"
        }
      })
      .then(response => {
        let { name, description } = response.data.updateSkill;
        expect(name).toBe("Test skill altered");
        expect(description).toBe("A test skill altered");
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Select a skill", () =>
    fetch(user_token)
      .mutate({
        mutation: GET_SKILL,
        variables: {
          id: skill_id
        }
      })
      .then(response => {
        let { skills } = response.data;
        expect(skills.length).toBeGreaterThanOrEqual(1);
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Set user skill", () =>
    fetch(user_token)
      .mutate({
        mutation: SET_USER_SKILL,
        variables: {
          skill: skill_id,
          stars: 5
        }
      })
      .then(response => {
        let { id } = response.data.setUserSkill.skill;
        expect(id).toBe(skill_id);
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Delete user skill", () =>
    fetch(user_token)
      .mutate({
        mutation: DELETE_USER_SKILL,
        variables: {
          skill: skill_id
        }
      })
      .then(response => {
        let { id } = response.data.deleteUserSkill.skill;
        expect(id).toBe(skill_id);
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Delete a skill", () =>
    fetch(user_token)
      .mutate({
        mutation: DELETE_SKILL,
        variables: {
          id: skill_id
        }
      })
      .then(response => {
        let { id } = response.data.deleteSkill;
        expect(id).toBe(skill_id);
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));
});
