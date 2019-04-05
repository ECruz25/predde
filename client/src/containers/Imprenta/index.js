import React, { Component } from "react";
import Nav from "./Nav";
class Imprenta extends Component {
  redirectToBook(categoriaId) {
    const url = `libros/${categoriaId}`;
  }
  handleOnChange = component => {
    if (
      component === "login" ||
      component === "logout" ||
      component === "register"
    ) {
      this.props.history.replace(`/${component}`);
    } else {
      this.props.history.replace(`/imprenta/${component}`);
    }
  };

  render() {
    return (
      <>
        <Nav handleOnChange={this.handleOnChange} />
      </>
    );
  }
}

export default Imprenta;
