import React, { useState } from "react";
import {
  Card,
  CardContent,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  IconButton,
  Grid
} from "@material-ui/core";
import { useFormikContext } from "formik";
import { AuthHidden } from "@linka";
import CodeIcon from "@material-ui/icons/Code";

export default function DebugFormik({ defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false);
  const {
    values,
    isValid,
    touched,
    isSubmitting,
    isValidating
  } = useFormikContext();
  return (
    <AuthHidden name="form-debug">
      <Grid container justify="flex-end">
        <IconButton
          color={open ? "primary" : "default"}
          onClick={() => setOpen(!open)}
        >
          <CodeIcon />
        </IconButton>
      </Grid>
      {open && (
        <Card variant="outlined">
          <CardContent>
            <b>Is valid: </b>
            {Boolean(isValid) ? (
              <Chip color="primary" size="small" label="Sim" />
            ) : (
              <Chip size="small" label="Não" />
            )}

            <b>Is submitting: </b>
            {Boolean(isSubmitting) ? (
              <Chip color="primary" size="small" label="Sim" />
            ) : (
              <Chip size="small" label="Não" />
            )}

            <b>Is validating: </b>
            {Boolean(isValidating) ? (
              <Chip color="primary" size="small" label="Sim" />
            ) : (
              <Chip size="small" label="Não" />
            )}
            <Table size="small" aria-label="a form values table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>Touched</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {values &&
                  Object.keys(values).map(item => (
                    <TableRow key={item}>
                      <TableCell component="th" scope="row">
                        <b>{item}</b>
                      </TableCell>
                      <TableCell>{JSON.stringify(values[item])}</TableCell>
                      <TableCell>{touched[item] ? "true" : "false"}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </AuthHidden>
  );
}
