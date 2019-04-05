import React, { Component } from "react";
import { FormControl, TextField, FormLabel, Button } from "@material-ui/core";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  onHandleUsernameChange = ({ target }) => {
    this.setState({ username: target.value });
  };
  onHandlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };
  submitForm = async () => {
    const { username, password } = this.state;
    try {
      const response = await fetch("/api/register", {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(this.state)
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <FormControl
        style={{
          display: "grid",
          width: "25%",
          margin: "100px auto",
          gridRowGap: "30px"
        }}
        onSubmit={this.submitForm}
      >
        <div
          className="input"
          style={{ display: "grid", gridTemplateColumns: "100%" }}
        >
          <FormLabel htmlFor="username">Usuario</FormLabel>
          <TextField
            type="text"
            name="username"
            id="username"
            onChange={this.onHandleUsernameChange}
          />
        </div>
        <div
          className="input"
          style={{ display: "grid", gridTemplateColumns: "100%" }}
        >
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <TextField
            type="password"
            name="password"
            id="password"
            onChange={this.onHandlePasswordChange}
          />
        </div>
        <Button variant="contained" onClick={this.submitForm}>
          Registrar
        </Button>
      </FormControl>
    );
  }
}

export default LoginForm;
