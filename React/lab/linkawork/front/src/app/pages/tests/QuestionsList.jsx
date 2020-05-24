import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import EditMenu from "app/components/layout/EditMenu";
import Options from "./Options";

const DELETE_TEST_QUESTION = gql`
  mutation DELETE_TEST_QUESTION($id: ID!) {
    deleteTestQuestion(id: $id) {
      id
    }
  }
`;

const GET_QUESTIONS = gql`
  query GET_QUESTIONS($id: ID!) {
    tests(id: $id) {
      id
      questions {
        id
        description
        options {
          id
          name
          correct
        }
      }
    }
  }
`;

const UPDATE_QUESTION = gql`
  mutation UPDATE_QUESTION($id: ID!, $order: Int) {
    updateTestQuestion(id: $id, order: $order) {
      id
      description
      order
    }
  }
`;

const QuestionsList = forwardRef(({ id, edit }, ref) => {
  let { data, loading, error, refetch } = useQuery(GET_QUESTIONS, {
    variables: { id }
  });
  const [open, setOpen] = useState(null);
  const [deleteTestQuestion] = useMutation(DELETE_TEST_QUESTION);
  const [updateQuestion] = useMutation(UPDATE_QUESTION);
  const [t] = useTranslation("skills");

  useImperativeHandle(ref, () => ({
    refetch
  }));

  if (loading) return t("Loading...");

  if (error) return "Não foi possível buscar as perguntas";

  let { questions } = data.tests[0];

  if (!questions || questions.length < 1)
    return t("This test dont have a questions");

  const onChange = e => {
    let question = questions[e.source.index];
    let order = e.destination.index;
    let new_questions = questions;
    new_questions.splice(e.source.index, 1);
    new_questions.splice(e.destination.index, 0, question);
    questions = new_questions;

    updateQuestion({ variables: { id: question.id, order: order + 1 } }).then(
      response => {
        if (response.errors) refetch();
      }
    );
  };

  return (
    <DragDropContext onDragEnd={onChange}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {questions.map((item, index) => (
              <Draggable draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <ExpansionPanel
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    expanded={open === index}
                    onChange={() => setOpen(open === index ? null : index)}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.description
                        }}
                      />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Options options={item.options} id={item.id} />
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});

export default QuestionsList;
