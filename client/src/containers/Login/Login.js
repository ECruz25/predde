import React from "react";
import { NavLink } from 'react-router-dom';

import "./Login.css";

const Login = props => {
    const { title } = props;

    const onSubmit = (e) => {
        const username = e.target[0].value;
        const password = e.target[1].value;

        const response = 'pase';
        if (response === 'pase') {
            props.history.replace(`/menu`);
        }
    };
    return (
        <div className="Init">
            <div className="Header">
                <div className="Welcome">
                    <h1>Portal de Administración PREDDE</h1>
                </div>
            </div>

            <div className="Login">
                <div className="Title">
                    <h2>BIENVENIDOS</h2>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="Form-Content">
                        <input
                            id="login__username"
                            type="text"
                            name="username"
                            class="form__input"
                            placeholder="Username"
                            required
                        />

                        <input
                            id="login__username"
                            type="text"
                            name="password"
                            class="form__input"
                            placeholder="Password"
                            required
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
        </div>
    );
};

export default Login;