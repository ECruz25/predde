import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../../Nav';

const StyledCategorias = styled.div`
  display: grid;
  width: 800px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
`;

const StyledCategoria = styled.div`
  display: grid;
  height: 20%;
  justify-content: center;
  :hover {
    background-color: purple;
    cursor: pointer;
  }
  .nombre {
    font-weight: bold;
    font-size: 15px;
  }
`;

class Categorias extends Component {
  state = {
    categorias: []
  };

  componentWillMount() {
    this.fetchCategorias();
  }

  async fetchCategorias() {
    const response = await fetch('/api/categorias');
    const categorias = await response.json();
    this.setState({ categorias });
  }

  onHandleObtenerLibros = categoria => {
    this.props.history.replace(`/imprenta/libros/${categoria}`);
  };

  render() {
    const { categorias } = this.state;
    return (
      <>
        <Nav />
        <StyledCategorias>
          {Object.keys(categorias).map(categoria => (
            <StyledCategoria
              key={categoria}
              onClick={() =>
                this.onHandleObtenerLibros(categorias[categoria]._id)
              }
            >
              <p className="nombre">{categorias[categoria].nombre}</p>
              <p className="descripcion">{categorias[categoria].descripcion}</p>
            </StyledCategoria>
          ))}
        </StyledCategorias>
      </>
    );
  }
}

export default Categorias;
