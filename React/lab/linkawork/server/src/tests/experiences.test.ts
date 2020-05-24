import fetch from "../config/apollo-fetch";
import {
  LOGIN,
  CREATE_EXPERIENCE,
  UPDATE_EXPERIENCE,
  DELETE_EXPERIENCE,
  SET_EXPERIENCE_SKILL,
  DELETE_EXPERIENCE_SKILL
} from "./queries";
let user_token: any, experience_id: any;

describe("Experiences", () => {
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
        mutation: CREATE_EXPERIENCE,
        variables: {
          company_name: "Linkawork",
          position_name: "Developer",
          initial_date: new Date(2019, 6, 15)
        }
      })
      .then(response => {
        let {
          id,
          company_name,
          position_name
        } = response.data.createExperience;
        expect(company_name).toBe("Linkawork");
        expect(position_name).toBe("Developer");
        experience_id = id;
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Update", () =>
    fetch(user_token)
      .mutate({
        mutation: UPDATE_EXPERIENCE,
        variables: {
          id: experience_id,
          company_name: "Linkawork altered",
          initial_date: new Date(2019, 6, 14)
        }
      })
      .then(response => {
        let {
          id,
          company_name,
          position_name
        } = response.data.updateExperience;
        expect(id).toBe(experience_id);
        expect(company_name).toBe("Linkawork altered");
        expect(position_name).toBe("Developer");
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Create experience skill", () =>
    fetch(user_token)
      .mutate({
        mutation: SET_EXPERIENCE_SKILL,
        variables: {
          experience: experience_id,
          skill: 1,
          description: "A Unit test skill"
        }
      })
      .then(response => {
        let { setExperienceSkill } = response.data;
        expect(setExperienceSkill).toBe(true);
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Delete experience skill", () =>
    fetch(user_token)
      .mutate({
        mutation: DELETE_EXPERIENCE_SKILL,
        variables: {
          experience: experience_id,
          skill: 1
        }
      })
      .then(response => {
        let { deleteExperienceSkill } = response.data;
        expect(deleteExperienceSkill).toBe(true);
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));

  test("Delete", () =>
    fetch(user_token)
      .mutate({
        mutation: DELETE_EXPERIENCE,
        variables: {
          id: experience_id
        }
      })
      .then(response => {
        let { deleteExperience } = response.data;
        expect(deleteExperience).toBe(true);
      })
      .catch(error => {
        console.log(error);
        expect(2).toBe(1);
      }));
});
