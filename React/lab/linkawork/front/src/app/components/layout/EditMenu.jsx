import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  IconButton,
  Tooltip,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";
import {
  ClearRounded as ClearRoundedIcon,
  MoreVert as MoreVertIcon,
  EditOutlined as EditOutlinedIcon
} from "@material-ui/icons";

export default function EditMenu(props) {
  const [t] = useTranslation("geral");
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <Tooltip title={t("Edit or delete")} aria-label={t("Edit or delete")}>
        <IconButton
          aria-controls={`menu`}
          aria-haspopup="true"
          onClick={e => setAnchorEl(e.currentTarget)}
        >
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id={`menu`}
        anchorEl={anchorEl}
        keepMounted
        onClose={() => setAnchorEl(null)}
        open={Boolean(anchorEl)}
      >
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            props.edit && props.edit();
          }}
        >
          <ListItemIcon>
            <EditOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">{t("Edit")}</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            props.delete && props.delete();
          }}
        >
          <ListItemIcon>
            <ClearRoundedIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">{t("Delete")}</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
