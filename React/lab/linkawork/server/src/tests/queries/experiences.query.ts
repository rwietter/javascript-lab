import gql from "graphql-tag";

export const CREATE_EXPERIENCE = gql`
  mutation CREATE_EXPERIENCE(
    $company: ID
    $company_name: String
    $position: ID
    $position_name: String
    $descritption: String
    $initial_date: Date!
    $final_date: Date
  ) {
    createExperience(
      company: $company
      company_name: $company_name
      position: $position
      position_name: $position_name
      descritption: $descritption
      initial_date: $initial_date
      final_date: $final_date
    ) {
      id
      company_name
      position_name
      descritption
      initial_date
      final_date
    }
  }
`;

export const UPDATE_EXPERIENCE = gql`
  mutation UPDATE_EXPERIENCE(
    $id: ID!
    $company: ID
    $company_name: String
    $position: ID
    $position_name: String
    $descritption: String
    $initial_date: Date
    $final_date: Date
  ) {
    updateExperience(
      id: $id
      company: $company
      company_name: $company_name
      position: $position
      position_name: $position_name
      descritption: $descritption
      initial_date: $initial_date
      final_date: $final_date
    ) {
      id
      company_name
      position_name
      descritption
      initial_date
      final_date
    }
  }
`;

export const DELETE_EXPERIENCE = gql`
  mutation DELETE_EXPERIENCE($id: ID!) {
    deleteExperience(id: $id)
  }
`;

export const SET_EXPERIENCE_SKILL = gql`
  mutation SET_EXPERIENCE_SKILL(
    $experience: ID!
    $skill: ID!
    $description: String
  ) {
    setExperienceSkill(
      experience: $experience
      skill: $skill
      description: $description
    )
  }
`;

export const DELETE_EXPERIENCE_SKILL = gql`
  mutation DELETE_EXPERIENCE_SKILL($experience: ID!, $skill: ID!) {
    deleteExperienceSkill(experience: $experience, skill: $skill)
  }
`;
