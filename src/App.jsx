import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import axios from "axios";

import Header from "components/Header";
import Form from "pages/Form";
import Computer from "pages/Computer";
import { Container } from "@material-ui/core";

const App = () => {
  axios.defaults.baseURL = "https://pc-buffet.herokuapp.com/api";
  const THEME = createTheme({
    typography: {
      fontFamily: "Montserrat",
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
    palette: {
      primary: {
        main: "#E7A732",
      },
      secondary: {
        main: "#343434",
      },
    },
  });

  return (
    <MuiThemeProvider theme={THEME}>
      <Router>
        <Header />
        <Container style={{ marginTop: "20px", marginBottom: "30px" }}>
          <Switch>
            <Route exact path="/">
              <Form />
            </Route>
            <Route exact path="/computer">
              <Computer />
            </Route>
          </Switch>
        </Container>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
