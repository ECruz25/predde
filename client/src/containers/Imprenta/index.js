import React, { Component } from 'react';
import Nav from './Nav';
class Imprenta extends Component {
  redirectToBook(categoriaId) {
    const url = `libros/${categoriaId}`;
  }
  handleOnChange = component => {
    this.props.history.replace(`/imprenta/${component}`);
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
