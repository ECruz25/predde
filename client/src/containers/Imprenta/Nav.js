import React, { Component, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  AppBar,
  Tabs,
  Tab
} from "@material-ui/core";
import Cart from "@material-ui/icons/ShoppingCart";

import { AppContext } from "../../App";

class Nav extends Component {
  handleOnChange = (e, value) => {
    debugger;
    this.props.handleOnChange(
      value === 0
        ? "categorias"
        : value === 1
        ? "libros"
        : value === 2
        ? "carrito"
        : value === 3
        ? "login"
        : "register"
    );
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <AppBar
            style={{
              display: "flex",
              marginBottom: "200px",
              justifyContent: "center"
            }}
          >
            <Tabs onChange={this.handleOnChange}>
              <Tab label="Categorias" />
              <Tab label="Libros" />
              <Tab label={context.state.total} icon={<Cart />} />
              {console.log(context)}
              {context.state.isLoggedIn ? (
                <Tab label="Logout" />
              ) : (
                <Tab label="Login" />
              )}
              {context.state.isLoggedIn || <Tab label="Register" />}
            </Tabs>
          </AppBar>
        )}
      </AppContext.Consumer>
    );
  }
}

// const Nav = ({ handleOnChange }) => {
//   const context = useContext(AppContext);
//   const [tab, setTab] = useState({ event: undefined, value: 0 });

//   // useEffect(() => {
//   //   console.log(tab);
//   //   handleOnChange(
//   //     tab.value === 0 ? "categorias" : tab.value === 1 ? "libros" : "carrito"
//   //   );
//   //   onChange={setTab}
//   // });

//   return (
//     <AppBar
//       style={{
//         display: "flex",
//         marginBottom: "200px"
//       }}
//     >
//       <Tabs>
//         <Tab label="Categorias" />
//         <Tab label="Libros" />
//         <Tab label={context.state.total} icon={<Cart />} />
//       </Tabs>
//     </AppBar>
//   );
// };

export default Nav;
