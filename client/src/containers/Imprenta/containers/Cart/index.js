import React, { Component } from "react";
import { AppContext } from "../../../../App";
import Nav from "../../Nav";
import { Button } from "@material-ui/core";

class Cart extends Component {
  handleOnChange = component => {
    this.props.history.replace(`/imprenta/${component}`);
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <Nav handleOnChange={this.handleOnChange} />
            {Object.keys(context.state.cart).map(
              key =>
                context.state.cart[key].cantidad > 0 && (
                  <div className="cartItem" style={{ marginTop: "100px" }}>
                    <span>{context.state.cart[key].nombre}</span>
                    <p>{context.state.cart[key].cantidad}</p>
                    <span>{`L. ${(
                      context.state.cart[key].cantidad *
                      context.state.cart[key].precio
                    ).toFixed(2)}`}</span>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() =>
                        context.addToCart(context.state.cart[key], -1)
                      }
                    >
                      remover 1
                    </Button>
                  </div>
                )
            )}
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Cart;
