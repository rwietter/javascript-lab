import React, { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Modal,
  Backdrop,
  Button,
  Grid
} from "@material-ui/core";
import { ClearRounded } from "@material-ui/icons";
import QuestionsList from "./QuestionsList";
import QuestionForm from "./QuestionForm";

export default function Questions(props) {
  const questionsRef = useRef(null);
  const [modal, setModal] = useState({ open: false });
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modal.open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        onClose={() => setModal({ open: false })}
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
            title="Question"
            action={
              <IconButton
                aria-label="settings"
                onClick={() => setModal({ open: false })}
              >
                <ClearRounded />
              </IconButton>
            }
          />
          <CardContent>
            <QuestionForm
              test={props.id}
              question={modal.question}
              onSave={() => {
                setModal({ open: false });
                questionsRef.current.refetch();
              }}
            />
          </CardContent>
        </Card>
      </Modal>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setModal({ open: true })}
          >
            Create a question
          </Button>
        </Grid>
        <Grid item xs={12}>
          <QuestionsList
            ref={questionsRef}
            id={props.id}
            edit={id => {
              setModal({ open: true, question: id });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
