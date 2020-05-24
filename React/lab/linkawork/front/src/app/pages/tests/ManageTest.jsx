import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Modal,
  Backdrop,
  Button,
  Typography,
  Paper,
  Tab,
  Box,
  Tabs
} from "@material-ui/core";
import { ClearRounded } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import TestForm from "./TestForm";
import EditMenu from "app/components/layout/EditMenu";
import Questions from "./Questions";
import Variables from "./Variables";

const TESTS = gql`
  query TESTS($id: ID!) {
    tests(id: $id) {
      id
      name
      description
    }
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default function Tests() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(TESTS, { variables: { id } });
  const [testModal, setTestModal] = useState({ open: false, test: null });
  const [value, setValue] = useState(0);

  if (loading) return "Carregando test...";

  if (error) return error;

  let test = data.tests[0];

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={testModal.open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        onClose={() => setTestModal({ open: false })}
        style={{
          width: "100%",
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
            maxWidth: 800,
            maxHeight: "95vh",
            overflow: "auto"
          }}
        >
          <CardHeader
            title="Test"
            action={
              <IconButton
                aria-label="settings"
                onClick={() => setTestModal({ open: false })}
              >
                <ClearRounded />
              </IconButton>
            }
          />
          <CardContent>
            <TestForm id={testModal.test} />
          </CardContent>
        </Card>
      </Modal>
      <Card>
        <Paper square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={(e, value) => setValue(value)}
            aria-label="disabled tabs example"
          >
            <Tab label="Enunciado" />
            <Tab label="Variáveis" />
            <Tab label="Questões" />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <Typography variant="h5">{test.name}</Typography>
          <div dangerouslySetInnerHTML={{ __html: test.description }} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Variables id={id} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Questions id={id} />
        </TabPanel>
      </Card>

      {/*<CardHeader
            title={test.name}
            action={
              <EditMenu edit={() => setTestModal({ open: true, test: id })} />
            }
          />
          <CardContent>
            
          </CardContent>
          
          */}
    </>
  );
}
