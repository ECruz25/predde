import React, { Component } from "react";
import {
  Input,
  TextField,
  FormLabel,
  NativeSelect,
  FormControl,
  Button
} from "@material-ui/core";
import Nav from "../../Nav";

class CategoriaForm extends Component {
  state = {};

  submitForm = async e => {
    e.preventDefault();
    const { body } = this.state;
    try {
      const response = await fetch("/api/categorias/crear", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: body
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  onHandle;

  onHandleNombreChange = e => {
    this.setState({
      body: { ...this.state.body, nombre: e.target.value }
    });
  };

  onHandleDescripcionChange = e => {
    this.setState({
      body: { ...this.state.body, Descripcion: e.target.value }
    });
  };

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
        <FormControl
          style={{
            display: "grid",
            width: "25%",
            margin: "100px auto",
            gridRowGap: "30px"
          }}
          encType="multipart/form-data"
          onSubmit={this.submitForm}
        >
          <div
            className="input"
            style={{ display: "grid", gridTemplateColumns: "100%" }}
          >
            <FormLabel htmlFor="nombre">Nombre</FormLabel>
            <TextField
              type="text"
              name="nombre"
              id="nombre"
              onChange={this.onHandleNombreChange}
            />
          </div>
          <div
            className="input"
            style={{ display: "grid", gridTemplateColumns: "100%" }}
          >
            <FormLabel htmlFor="Descripcion">Descripcion</FormLabel>
            <TextField
              type="text"
              name="Descripcion"
              id="Descripcion"
              onChange={this.onHandleDescripcionChange}
            />
          </div>
          <Button variant="contained">Enviar</Button>
        </FormControl>
      </>
    );
  }
}
export default CategoriaForm;
