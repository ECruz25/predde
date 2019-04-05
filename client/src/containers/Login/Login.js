import { NavLink } from 'react-router-dom';
import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
    state={
        username:'',
        password:''
    };

    handleUsernameChange = function(e) {
        this.setState({username:e.target.value});
    }

    handlePasswordChange = function(e){
        this.setState({password:e.target.value});
    }

    handleSubmit(event) {
     
    }

    render() {
        return (
            < div className="Init" >
                <div className="Header">
                    <div className="Welcome">
                        <h1>Portal de Administración PREDDE</h1>
                    </div>
                </div>

                <div className="Login">
                    <div className="Title">
                        <h2>BIENVENIDOS</h2>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <div className="Form-Content">
                            <input
                                id="login__username"
                                type="text"
                                name="username"
                                class="form__input"
                                placeholder="Username"
                                // required
                                onChange={e => this.handleUsernameChange(e)}
                            />

                            <input
                                id="login__username"
                                type="text"
                                name="password"
                                class="form__input"
                                placeholder="Password"
                                // required
                                onChange={e => this.handlePasswordChange(e)}
                            />
                        </div>

                        <div
                            style={{
                                position: "absolute",
                                marginTop: "15px",
                                right: "80px",
                                justifyContent: "left"
                            }}
                        >

                            <input type="submit" value="Sign In" />
                        </div>
                    </form>

                    <div className="Fotter" />
                </div>
            </div >
        );
    }
}

export default Login;