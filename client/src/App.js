import React, { createContext, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Containers from './containers/index';
import Imprenta from './containers/Imprenta';
import Categorias from './containers/Imprenta/containers/Categorias';
import Libros from './containers/Imprenta/containers/Libros';
import LibroForm from './containers/Imprenta/containers/Libros/LibroForm';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

import './App.css';

const StyledApp = styled.div`
  display: grid;
  margin: 0;
  height: 120vh;
  grid-template-rows: 10% 70% 20%;
`;

export const AppContext = createContext();

class ContextProvider extends Component {
  state = {
    cart: {},
    total: 0
  };

  addToCart = (producto, cantidad) => {
    const cart = { ...this.state.cart };
    const cant =
      this.state.cart[producto._id] !== undefined
        ? this.state.cart[producto._id].cantidad
        : 0;

    cart[producto._id] = { ...producto, cantidad: cant + cantidad };
    const total = this.state.total + cantidad;
    this.setState({ cart, total });
  };
  render() {
    return (
      <AppContext.Provider
        value={{ state: this.state, addToCart: this.addToCart }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8e24aa'
    },
    secondary: pink
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
