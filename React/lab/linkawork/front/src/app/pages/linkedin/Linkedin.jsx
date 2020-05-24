import React from "react";
import { Button } from "@material-ui/core";
import { LinkedIn } from "react-linkedin-login-oauth2";
import { LinkedIn as LinkedInIcon } from "@material-ui/icons";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useTranslation } from "react-i18next";

const LOGIN_WITH_LINKEDIN = gql`
  mutation LOGIN_WITH_LINKEDIN($code: String!, $type: String!) {
    loginWithLinkedIn(code: $code, type: $type) {
      id
      token
      firstname
      lastname
      email
      auths
    }
  }
`;

export default function Linkedin({ type }) {
  const [loginWithLinkedIn, { loading }] = useMutation(LOGIN_WITH_LINKEDIN);
  const [t] = useTranslation("login");

  const login = e => {
    loginWithLinkedIn({ variables: { code: e.code, type } }).then(result => {
      if (result.errors && result.errors.length > 0)
        alert({
          variables: {
            message: result.errors[0].message,
            variant: "error",
            horizontal: "right"
          }
        });
      else if (result.data.loginWithLinkedIn) {
        let {
          token,
          auths,
          firstname,
          lastname,
          email
        } = result.data.loginWithLinkedIn;
        auths = JSON.stringify(auths);
        auths = btoa(auths);
        let user = JSON.stringify({ firstname, lastname, email, auths });
        localStorage.setItem("token", token);
        localStorage.setItem("user", user);
        window.location.href = "/";
      }
    });
  };

  return (
    <LinkedIn
      clientId="7823dlkmz5w2d4"
      onFailure={e =>
        alert({
          variables: {
            message: e.errorMessage,
            variant: "error",
            horizontal: "right"
          }
        })
      }
      onSuccess={login}
      redirectUri="http://localhost:3000/linkedin"
      scope={["r_emailaddress", "r_liteprofile", "w_member_social"]}
      disabled={loading}
    >
      <Button color="primary" variant="contained" disabled={loading}>
        <LinkedInIcon />
        {`   ${t("Login with LinkedIn")}`}
      </Button>
    </LinkedIn>
  );
}
