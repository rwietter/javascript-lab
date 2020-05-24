import React from "react";

//componentes
import Login from "app/pages/login/Login";
import Register from "app/pages/register/Register";
import Account from "app/pages/account/Account";
import Profile from "app/pages/profile/Profile";
import Home from "app/pages/home/Home";
import Skills from "app/pages/skills/Skills";
import ForgotPassword from "app/pages/forgot/ForgotPassword";
import EditSkill from "app/pages/skills/EditSkill";
import Languages from "app/pages/languages/Languages";
import ChangePassword from "app/pages/account/ChangePassword";
import Experiences from "app/pages/experiences/Experiences";
import Tests from "app/pages/tests/Tests";
import ManageTest from "app/pages/tests/ManageTest";
import { LinkedInPopUp } from "react-linkedin-login-oauth2";
//icons para menu
import {
  HomeOutlined,
  AccountBoxOutlined,
  StarsOutlined,
  SchoolOutlined,
  BusinessCenterOutlined,
  TranslateOutlined,
  AssignmentTurnedInOutlined
} from "@material-ui/icons";

const routes = [
  {
    path: "/",
    exact: true,
    menuItem: true,
    name: "Home",
    icon: <HomeOutlined />,
    nav: true,
    auth: true,
    component: Home
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    auth: "login",
    nav: false,
    noAuth: true
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    exact: true,
    noAuth: true,
    nav: false
  },
  {
    path: "/register/:type",
    component: Register,
    nav: false,
    noAuth: true
  },
  {
    path: "/account",
    component: Account,
    exact: true,
    auth: true,
    name: "Account",
    nav: true
  },
  {
    path: "/change-password",
    component: ChangePassword,
    exact: true,
    auth: true,
    name: "Change Password",
    nav: true
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
    auth: true,
    menuItem: true,
    name: "Profile",
    icon: <AccountBoxOutlined />,
    nav: true
  },
  {
    path: "/skills",
    exact: true,
    auth: "skills-route",
    menuItem: true,
    name: "Skills",
    icon: <StarsOutlined />,
    nav: true,
    component: Skills
  },
  {
    path: "/skills/:id",
    exact: true,
    auth: "skills-edit",
    name: "Edit skill",
    nav: true,
    component: EditSkill
  },
  {
    path: "/education",
    exact: true,
    menuItem: true,
    name: "Education",
    nav: true,
    icon: <SchoolOutlined />
  },
  {
    path: "/experiences",
    component: Experiences,
    exact: true,
    auth: "experiences-route",
    menuItem: true,
    name: "Experiences",
    nav: true,
    icon: <BusinessCenterOutlined />
  },
  {
    path: "/languages",
    exact: true,
    auth: "languages-route",
    menuItem: true,
    name: "Languages",
    nav: true,
    icon: <TranslateOutlined />,
    component: Languages
  },
  {
    path: "/linkedin",
    exact: true,
    name: "Login with linkedin",
    component: LinkedInPopUp,
    nav: false,
    noAuth: true
  },
  {
    path: "/tests",
    exact: true,
    name: "Tests",
    component: Tests,
    nav: true,
    menuItem: true,
    icon: <AssignmentTurnedInOutlined />,
    auth: true
  },
  {
    path: "/tests/:id",
    exact: true,
    name: "Tests",
    component: ManageTest,
    nav: true,
    auth: true
  }
];

export default routes;
