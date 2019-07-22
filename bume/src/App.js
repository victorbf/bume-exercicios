import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { createGlobalStyle } from 'styled-components';
import {
  Exercicio1Page,
  Exercicio2Page,
  Exercicio3Page,
  Exercicio4Page,
  Exercicio5Page,
} from './components/pages';
import Navbar from './components/layout/Navbar';

const App = () => {
  const GlobalStyles = createGlobalStyle`
    body {
      font-family: 'Roboto', sans-serif;
    }
    strong {
      font-weight: 500;
    }
    p {
      margin: 0;
    }
  `

  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Container fixed>
          <Route
            exact
            path="/exercicio-1"
            component={Exercicio1Page}
          />
          <Route
            exact
            path="/exercicio-2"
            component={Exercicio2Page}
          />
          <Route
            exact
            path="/exercicio-3"
            component={Exercicio3Page}
          />
          <Route
            exact
            path="/exercicio-4"
            component={Exercicio4Page}
          />
          <Route
            exact
            path="/exercicio-5"
            component={Exercicio5Page}
          />
          <Route
            path="/exercicio-6"
          />
          <Route
            path="/exercicio-7"
          />
          <Route
            path="/exercicio-8"
          />
          <Route
            path="/exercicio-9"
          />
          <Route
            path="/exercicio-10"
          />
        </Container>
      </Router>
    </Fragment>
  )
}

export default App;
