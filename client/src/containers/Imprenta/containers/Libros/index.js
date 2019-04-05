import React, { Component } from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  SvgIcon
} from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// import AddIcon from "@material-ui/icons/Add";
import { AppContext } from "../../../../App";
import Nav from "../../Nav";

const StyledLibros = styled.div`
  display: grid;
  width: 70vw;
  margin-left: 15vw;
  margin-right: 15vw;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 100px;
`;

const StyledLibro = styled.div``;

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

  async fetchLibros(categoria) {
    if (categoria !== undefined) {
      const response = await fetch(`/api/libros/categoria/${categoria}`);
      const libros = await response.json();
      this.setState({ libros });
    } else {
      const response = await fetch("/api/libros");
      const libros = await response.json();
      this.setState({ libros });
    }
  }

  render() {
    const { libros } = this.state;
    return (
      <>
        <Nav handleOnChange={this.handleOnChange} />
        <StyledLibros>
          {Object.keys(libros).map(libro => (
            <StyledLibro>
              <Card style={{ height: " 200px" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {libros[libro].nombre}
                    </Typography>
                    <Typography component="p">
                      {`L. ${libros[libro].precio.toFixed(2)}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <AppContext.Consumer>
                    {context => (
                      <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        onClick={() => context.addToCart(libros[libro], 1)}
                      >
                        Comprar
                      </Button>
                    )}
                  </AppContext.Consumer>
                </CardActions>
              </Card>
            </StyledLibro>
          ))}
        </StyledLibros>
      </>
    );
  }
}

export default Libros;
