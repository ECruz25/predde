import React, { Component, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Containers from "./containers/index";
import Imprenta from "./containers/Imprenta";
import Categorias from "./containers/Imprenta/containers/Categorias";
import Libros from "./containers/Imprenta/containers/Libros";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import LibroForm from "./containers/Imprenta/containers/Libros/LibroForm";
import CategoriaForm from "./containers/Imprenta/containers/Categorias/CategoriaForm";

import Cart from "./containers/Imprenta/containers/Cart";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

import Login from "./containers/Login/login";

import "./App.css";

const StyledApp = styled.div`
  display: grid;
  margin: 0;
  height: 100vh;
  grid-template-rows: 10% 89% 1%;
  grid-column-gap: 200px;
`;

export const AppContext = createContext();

class ContextProvider extends Component {
  state = {
    cart: {},
    total: 0,
    loggedIn: false
  };
  async componentDidMount() {
    try {
      const response = await fetch("/api/isloggedIn");
      this.setState({
        loggedIn: response.ok
      });
    } catch (error) {}
  }
  async componentDidUpdate() {
    try {
      const response = await fetch("/api/isloggedIn");
      this.setState({
        loggedIn: response.ok
      });
    } catch (error) {}
  }

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
      main: "#8e24aa"
    },
    secondary: pink
  }
});

const App = () => (
  <ContextProvider>
    <MuiThemeProvider theme={theme}>
      <Router>
        <StyledApp>
          <Switch>
            <Route path="/" component={Containers} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={RegisterForm} exact />
            <Route path="/menu" component={Containers} exact />
            <Route path="/imprenta" component={Imprenta} exact />
            <Route path="/imprenta/carrito" component={Cart} exact />
            <Route path="/imprenta/categorias" component={Categorias} exact />
            <Route path="/imprenta/libros" component={Libros} exact />
            <Route path="/imprenta/libros/crear" component={LibroForm} exact />
            <Route
              path="/imprenta/categorias/crear"
              component={CategoriaForm}
              exact
            />
            <Route
              path="/imprenta/libros/:categoria"
              component={Libros}
              exact
            />
          </Switch>
        </StyledApp>
      </Router>
    </MuiThemeProvider>
  </ContextProvider>
);

// Configuring Passport

export default App;
