import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Containers from './containers/index';
import Imprenta from './containers/Imprenta';
import Categorias from './containers/Imprenta/containers/Categorias';
import Libros from './containers/Imprenta/containers/Libros';
import LibroForm from './containers/Imprenta/containers/Libros/LibroForm';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import './App.css';

const StyledApp = styled.div`
  display: grid;
  margin: 0;
  height: 120vh;
  grid-template-rows: 10% 70% 20%;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    }
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <StyledApp>
        <Switch>
          {/* <Route path="/editorial" component={Editorial} /> */}
          <Route path="/" component={Containers} exact />
          <Route path="/imprenta" component={Imprenta} exact />
          <Route path="/imprenta/categorias" component={Categorias} exact />
          <Route path="/imprenta/libros" component={Libros} exact />
          <Route path="/imprenta/libros/crear" component={LibroForm} exact />
          <Route path="/imprenta/libros/:categoria" component={Libros} exact />
        </Switch>
      </StyledApp>
    </Router>
  </MuiThemeProvider>
);

export default App;
