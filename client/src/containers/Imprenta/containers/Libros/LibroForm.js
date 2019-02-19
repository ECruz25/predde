import React, { Component } from 'react';
import {
  Input,
  FormLabel,
  NativeSelect,
  FormControl,
  Button
} from '@material-ui/core';

class LibroForm extends Component {
  state = { categorias: {}, body: { photo: null } };

  componentDidMount() {
    this.fetchCategorias();
  }

  submitForm = async e => {
    e.preventDefault();
    const { body } = this.state;
    try {
      const response = await fetch('/api/libros/crear', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: { photo: 1 }
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  fetchCategorias = async () => {
    const respuesta = await fetch('/api/categorias');
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

  render() {
    const { categorias } = this.state;
    return (
      <FormControl
        style={{
          display: 'grid',
          width: '50%',
          margin: '50px auto',
          gridRowGap: '20px'
        }}
        encType="multipart/form-data"
        onSubmit={this.submitForm}
      >
        <FormLabel htmlFor="nombre">Nombre</FormLabel>
        <Input
          type="text"
          name="nombre"
          id="nombre"
          onChange={this.onHandleNombreChange}
        />
        <FormLabel htmlFor="precio">Precio</FormLabel>
        <Input
          type="number"
          name="precio"
          id="precio"
          onChange={this.onHandlePrecioChange}
        />
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
        <FormLabel htmlFor="photo">Imagen</FormLabel>
        <Input
          type="file"
          inputType="file"
          name="photo"
          id="photo"
          accept="image/png, image/jpeg"
          onChange={this.onHandlePhotoChange}
        />
        <Button variant="contained">Enviar</Button>
      </FormControl>
    );
  }
}

export default LibroForm;
