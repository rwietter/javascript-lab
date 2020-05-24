import React, { useState, useRef } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Modal,
  Backdrop,
  Button
} from "@material-ui/core";
import { ClearRounded } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import VariableForm from "./VariableForm";
import VariablesList from "./VariablesList";

export default function Variables({ id }) {
  const variablesListRef = useRef();
  const [variableModal, setVariableModal] = useState({
    open: false,
    variable: null
  });
  const [t] = useTranslation("skills");

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={variableModal.open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        onClose={() => setVariableModal({ open: false })}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: 800,
            maxHeight: "95vh",
            overflow: "auto"
          }}
        >
          <CardHeader
            title={t("Variable")}
            action={
              <IconButton
                aria-label="settings"
                onClick={() => setVariableModal({ open: false })}
              >
                <ClearRounded />
              </IconButton>
            }
          />
          <CardContent>
            <VariableForm
              test={id}
              variable={variableModal.variable}
              onSave={() => {
                variablesListRef.current.refetch();
                setVariableModal({ open: false });
              }}
            />
          </CardContent>
        </Card>
      </Modal>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setVariableModal({ open: true, variable: null })}
          >
            Create a variable
          </Button>
        </Grid>

        <Grid item xs={12}>
          <VariablesList
            ref={variablesListRef}
            id={id}
            edit={id => setVariableModal({ open: true, variable: id })}
          />
        </Grid>
      </Grid>
    </>
  );
}
