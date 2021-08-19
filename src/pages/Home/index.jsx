import React from "react";

import { Container, Logo, Slogan, Material } from "./styles";
import ImgLogo from "../../assets/logo.png";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(5),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Home() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container>
      <Logo src={ImgLogo} alt="Logo WA" />
      <Slogan>
        Perguntas Teste WA <br />
      </Slogan>
      <Material>
        <Button className={classes.button} onClick={handleOpen}>
          Quantas perguntas gostaria de responder?
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Perguntas
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            <MenuItem value={40}>4</MenuItem>
            <MenuItem value={50}>5</MenuItem>
            <MenuItem value={60}>6</MenuItem>
            <MenuItem value={70}>7</MenuItem>
            <MenuItem value={80}>8</MenuItem>
            <MenuItem value={90}>9</MenuItem>
            <MenuItem value={100}>10</MenuItem>
          </Select>
        </FormControl>
      </Material>     
    </Container>
  );
}

export default Home;
