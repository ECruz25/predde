import React, { Component } from 'react';
import Nav from './Nav';
class Imprenta extends Component {
  redirectToBook(categoriaId) {
    const url = `libros/${categoriaId}`;
  }
  render() {
    return (
      <>
        <Nav />
      </>
    );
  }
}

export default Imprenta;
