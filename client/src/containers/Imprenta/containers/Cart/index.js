import React, { Component } from "react";
import { AppContext } from "../../../../App";
import Nav from "../../Nav";
import { Button } from "@material-ui/core";

import './Cart.css';

class Cart extends Component {
  handleOnChange = component => {
    this.props.history.replace(`/imprenta/${component}`);
  };

  render() {
      return (
      <AppContext.Consumer>
        {context => (
          <>
            <div>
            <Nav handleOnChange={this.handleOnChange} />
            </div>
            <div className="cart" id="style-1">
            {Object.keys(context.state.cart).map(
              key =>
                context.state.cart[key].cantidad > 0 && (
                  <div className="cartItem"  >
                   <div className="BuyData"> 
                   <span>{context.state.cart[key].nombre}</span>
                    <span>{`Cantidad: ${context.state.cart[key].cantidad}`}</span>
                    <span>{`L. ${(
                      context.state.cart[key].cantidad *
                      context.state.cart[key].precio
                    ).toFixed(2)}`}</span>
                   </div>
                  <div className="button-remove">
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
                  </div>
                )
            )} 
            </div>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Cart;
