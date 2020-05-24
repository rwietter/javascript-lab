import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Grid, Paper, Checkbox } from "@material-ui/core";
import EditMenu from "app/components/layout/EditMenu";

export default function Options(props) {
  return (
    <DragDropContext /*onDragEnd={onChange}*/>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Grid container spacing={1}>
              {props.options.map((item, index) => (
                <Grid key={item.id} item xs={12}>
                  <Draggable draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <Paper
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Grid
                          container
                          alignItems="center"
                          justify="space-between"
                        >
                          <div>
                            <Checkbox
                              value="secondary"
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox"
                              }}
                            />
                            <strong>{item.name}</strong>
                          </div>
                          <EditMenu />
                        </Grid>
                      </Paper>
                    )}
                  </Draggable>
                </Grid>
              ))}
              {provided.placeholder}
            </Grid>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
