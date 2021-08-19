import React from "react";

import { Container, Header, Buttons } from "./styles";
import RestQuestions from '../../components/RestQuestions';

import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",

    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

function Questions() {
  const classes = useStyles();

  return (
    <Container>
      <Header>
        <p>Clique em Start para iniciar, ou Cancelar para voltar.</p>
        <Buttons>
        <Button className={classes.button} variant="contained" color="primary">
          Start
        </Button>
        <Button className={classes.button} variant="contained" color="secondary">
          Cancelar
        </Button>
        </Buttons>
      </Header>
      <RestQuestions />
    </Container>
  );
}

export default Questions;
