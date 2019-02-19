import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class index extends Component {
  render() {
    return (
      <div>
        <NavLink to="/imprenta">Imprenta</NavLink>
        <NavLink to="/editorial">Editorial</NavLink>
      </div>
    );
  }
}

export default index;
