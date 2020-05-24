import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CreateAccountButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [t] = useTranslation("login");

  return (
    <>
      <Button
        style={{ textTransform: "initial" }}
        color="primary"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {t("signup")}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link
          to="register/me"
          style={{ textDecoration: "none", color: "#222" }}
        >
          <MenuItem onClick={handleClose}>{t("formyself")}</MenuItem>
        </Link>
        <Link
          to="register/business"
          style={{ textDecoration: "none", color: "#222" }}
        >
          <MenuItem onClick={handleClose}>{t("formybusiness")}</MenuItem>
        </Link>
      </Menu>
    </>
  );
}

export default CreateAccountButton;
