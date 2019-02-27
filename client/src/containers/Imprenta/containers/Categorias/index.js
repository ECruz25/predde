import React, { Component } from "react";
import styled from "styled-components";
import { CardContent, Card, CardActions, Typography } from "@material-ui/core";
import Nav from "../../Nav";

const StyledCategorias = styled.div`
  display: grid;
  width: 1000px;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  margin: 0 auto;
  margin-top: 100px;
  minwidth: 275px;
`;

const StyledCategoria = styled.div`
  // width: 20px;
  div {
    padding-left: 20px;
    &:hover {
      cursor: pointer;
    }
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
    const response = await fetch("/api/categorias");
    const categorias = await response.json();
    this.setState({ categorias });
  }

  handleOnChange = component => {
    this.props.history.replace(`/imprenta/${component}`);
  };

  onHandleObtenerLibros = categoria => {
    this.props.history.replace(`/imprenta/libros/${categoria}`);
  };

  render() {
    const { categorias } = this.state;
    return (
      <>
        <Nav handleOnChange={this.handleOnChange} />
        <StyledCategorias>
          {Object.keys(categorias).map(categoria => (
            <StyledCategoria
              key={categoria}
              onClick={() =>
                this.onHandleObtenerLibros(categorias[categoria]._id)
              }
            >
              <Card style={{ marginLeft: "20px" }}>
                <Typography variant="h5" component="h2">
                  <p className="nombre">{categorias[categoria].nombre}</p>
                </Typography>
                <Typography component="p">
                  <p className="descripcion">
                    {categorias[categoria].descripcion}
                  </p>
                </Typography>
              </Card>
            </StyledCategoria>
          ))}
        </StyledCategorias>
      </>
    );
  }
}

export default Categorias;
