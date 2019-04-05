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

class LibroForm extends Component {
  state = { categorias: {}, body: { photo: null } };

  componentDidMount() {
    this.fetchCategorias();
  }

  submitForm = async e => {
    e.preventDefault();
    const { body } = this.state;
    try {
      const response = await fetch("/api/libros/crear", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: body
      });
    } catch (error) {
      console.log(error);
    }
  };

  fetchCategorias = async () => {
    const respuesta = await fetch("/api/categorias");
    const categorias = await respuesta.json();
    this.setState({ categorias });
  };

  onHandlePhotoChange = e => {
    this.setState({ body: { ...this.state.body, photo: e.target } });
  };

  onHandleNombreChange = e => {
    this.setState({
      body: { ...this.state.body, nombre: e.target.value }
    });
  };

  onHandlePrecioChange = e => {
    this.setState({ body: { ...this.state.body, precio: e.target.value } });
  };

  onHandleCategoriaChange = e => {
    this.setState({ body: { ...this.state.body, categoria: e.target.value } });
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
    const { categorias } = this.state;
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
            <FormLabel htmlFor="precio">Precio</FormLabel>
            <TextField
              type="number"
              name="precio"
              id="precio"
              onChange={this.onHandlePrecioChange}
            />
          </div>
          <div
            className="input"
            style={{ display: "grid", gridTemplateColumns: "100%" }}
          >
            <FormLabel htmlFor="categoria">Categoria</FormLabel>
            <NativeSelect
              name="categoria"
              id="categoria"
              onChange={this.onHandleCategoriaChange}
            >
              {Object.keys(categorias).map(categoria => (
                <option value={categorias[categoria]._id}>
                  {categorias[categoria].nombre}
                </option>
              ))}
            </NativeSelect>
          </div>
          <div
            className="input"
            style={{ display: "grid", gridTemplateColumns: "100%" }}
          >
            <FormLabel htmlFor="photo">Imagen</FormLabel>
            <Input
              type="file"
              inputType="file"
              name="photo"
              id="photo"
              accept="image/png, image/jpeg"
              onChange={this.onHandlePhotoChange}
            />
          </div>
          <Button variant="contained">Enviar</Button>
        </FormControl>
      </>
    );
  }
}

export default LibroForm;
