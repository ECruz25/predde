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
import "../../../Login/Login.css"
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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  fetchCategorias = async () => {
    const respuesta = await fetch("/api/categorias");
    const categorias = await respuesta.json();
    this.setState({ categorias });
  };

  onHandle;

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
    this.props.history.replace(`/imprenta/${component}`);
  };

  render() {
    const { categorias } = this.state;
    return (
      <div className="FormsDiv">
        <Nav handleOnChange={this.handleOnChange} />
        <FormControl
          style={{
            display: "grid",
            width: "80%",
            margin: "16px auto",
            gridRowGap: "30px"
          }}
          encType="multipart/form-data"
          onSubmit={this.submitForm}
        >
          <h2 style={{ color: '#d44179' }}>Ingrese la informacion del Libro</h2>
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
        {/* </div> */}
      </div>
    );
  }
}

export default LibroForm;
