import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

import { Grid, Typography } from "@material-ui/core";
import { RadioGroup, RadioButton } from "react-radio-buttons";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "2rem",
  },
}));

function Questions(props) {
  const classes = useStyles();
  const [questions, setQuestions] = useState([props.questions]);
  const [steps, setSteps] = useState(0)

  useEffect(() => {
    setQuestions(props.questions);
  }, [setQuestions, props]);

  const onChange = (value) => {
    console.log(value);
  };

  const renderQuestions = () => {
    return (
      <RadioGroup onChange={onChange}>
        <RadioButton value="apple">Apple</RadioButton>
        <RadioButton value="orange">Orange</RadioButton>
        <RadioButton value="melon">Melon</RadioButton>
      </RadioGroup>
    );
  };

  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={8}>
          {console.log(questions)}
        {renderQuestions()}
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
  };
};

export default connect(mapStateToProps, null)(Questions);
