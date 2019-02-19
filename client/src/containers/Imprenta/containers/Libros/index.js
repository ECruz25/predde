import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../../Nav';

const StyledCategorias = styled.div`
  display: grid;
  width: 70vw;
  margin-left: 15vw;
  margin-right: 15vw;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledLibro = styled.div`
  .nombre {
    font-weight: bold;
    font-size: 15px;
  }
`;

class Libros extends Component {
  state = {
    libros: {}
  };

  componentWillMount() {
    if (this.props.match.params.categoria !== undefined) {
      this.fetchLibros(this.props.match.params.categoria);
    } else {
      this.fetchLibros();
    }
  }

  async fetchLibros(categoria) {
    if (categoria !== undefined) {
      const response = await fetch(`/api/libros/categoria/${categoria}`);
      const libros = await response.json();
      this.setState({ libros });
    } else {
      const response = await fetch('/libros');
      const libros = await response.json();
      this.setState({ libros });
    }
  }

  render() {
    const { libros } = this.state;
    return (
      <>
        <Nav />
        <StyledCategorias>
          {Object.keys(libros).map(libro => (
            <StyledLibro key={libro}>
              <p className="nombre">{libros[libro].nombre}</p>
              <p className="precio">{`L. ${libros[libro].precio.toFixed(
                2
              )}`}</p>
            </StyledLibro>
          ))}
        </StyledCategorias>
      </>
    );
  }
}

export default Libros;
