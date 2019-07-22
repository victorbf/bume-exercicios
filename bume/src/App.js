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
  Exercicio6Page,
  Exercicio7Page,
  Exercicio8Page,
  Exercicio9Page,
  Exercicio10Page,
} from './components/pages';
import Navbar from './components/layout/Navbar';

const App = () => {
  const GlobalStyles = createGlobalStyle`
    body {
      font-family: 'Roboto', sans-serif;
      margin: 0;
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
            exact
            path="/exercicio-6"
            component={Exercicio6Page}
          />
          <Route
            exact
            path="/exercicio-7"
            component={Exercicio7Page}
          />
          <Route
            exact
            path="/exercicio-8"
            component={Exercicio8Page}
          />
          <Route
            exact
            path="/exercicio-9"
            component={Exercicio9Page}
          />
          <Route
            exact
            path="/exercicio-10"
            component={Exercicio10Page}
          />
        </Container>
      </Router>
    </Fragment>
  )
}

export default App;
