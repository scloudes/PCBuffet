import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import getResult from "services/getResult";

import {
  Grid,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControlLabel-root": {
      margin: theme.spacing(1, 2, 1),
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(2, 2, 3),
    },
    "& .MuiInputBase-input": {
      textAlign: "right",
    },
  },
}));

function Questions(props) {
  const classes = useStyles();
  const [result, setResult] = useState({
    category: props.category,
    price: "",
  });
  const history = useHistory();
  const questions = props.questions;

  const onChange = (i, value) => {
    setResult((val) => ({ ...val, [i]: value }));
  };

  const getBack = () => {
    props.handler(0);
  };

  const renderQuestions = ({ question, answers, subquestions = null }, i) => {
    return (
      <div key={question}>
        <Typography variant="h6">{question}</Typography>
        <FormControl component="fieldset">
          <RadioGroup
            name={question}
            onChange={(e) => {
              onChange(i, e.target.value);
            }}
          >
            {answers.map((item, i) => (
              <FormControlLabel
                value={`${i}`}
                control={<Radio color="primary" />}
                label={item}
                key={item}
              />
            ))}
          </RadioGroup>
        </FormControl>
        {subquestions && (
          <>
            {subquestions[result[i]] && (
              <>
                <Typography variant="h6">
                  {subquestions[result[i]].question}
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    name={subquestions[result[i]].question}
                    onChange={(e) => {
                      onChange(`s${i}`, e.target.value);
                    }}
                  >
                    {subquestions[result[i]].answers.map((item, i) => (
                      <FormControlLabel
                        value={`${i}`}
                        control={<Radio color="primary" />}
                        label={item}
                        key={item}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sm={8}>
        <Typography
          variant="h6"
          onClick={getBack}
          style={{ cursor: "pointer" }}
        >
          ← Atrás
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} className={classes.root}>
        <Typography variant="h6">¿De cuanto es su presupuesto?</Typography>
        <TextField
          label="S/"
          type="number"
          value={result.price}
          onChange={(e) => {
            if (e.target.value) {
              setResult((val) => ({ ...val, price: parseInt(e.target.value) }));
            } else {
              setResult((val) => ({ ...val, price: e.target.value }));
            }
          }}
        />
        {questions.map((item, i) => renderQuestions(item, i))}
        {console.log(result)}
      </Grid>
      <Grid item xs={12} sm={8} style={{ textAlign: "center" }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            getResult(result).then((res) => {
              localStorage.setItem("computer", JSON.stringify(res[0]));
              history.push("computer");
            });
          }}
        >
          Conoce tu computadora ideal
        </Button>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
    questions: state.questions,
  };
};

export default connect(mapStateToProps, null)(Questions);
