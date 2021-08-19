import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import api from "../../service/api";

import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function RestQuestions() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const [question, setQuestion] = useState([]);

  async function getQuestions() {
    try {
      const response = await api.get(`/api.php?amount=${3}`);

      // console.log(response.data.results);

      const data = response.data.results;
      console.log(data);

      setQuestion(data);
    } catch (err) {
      alert("Não existe perguntas!");
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <>
      {question.map((question) => {
        return (
          <Container>
            <h3>Category: {question.category}</h3>
            <p>{question.difficulty}</p>
            <p>{question.question}</p>
            <form onSubmit={handleSubmit}>
              <FormControl
                component="fieldset"
                error={error}
                className={classes.formControl}
              >
                <FormLabel component="legend">
                  Pop quiz: Material-UI is...
                </FormLabel>
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={value}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="best"
                    control={<Radio />}
                    label="The best!"
                  />
                  <FormControlLabel
                    value="worst"
                    control={<Radio />}
                    label="The worst."
                  />
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Check Answer
                </Button>
              </FormControl>
            </form>
          </Container>
        );
      })}
    </>
  );
}

export default RestQuestions;
