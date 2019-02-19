import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText, AppBar } from '@material-ui/core';

class Nav extends Component {
  state = {
    value: 0
  };

  handleOnChange(e, value) {
    this.setState({ value });
  }
  render() {
    return (
      <List
        component="nav"
        style={{
          display: 'flex',
          marginLeft: '200px'
        }}
      >
        <NavLink
          style={{ textDecoration: 'none' }}
          exact
          activeClassName="nav-item-selected"
          to="/imprenta/categorias"
        >
          <ListItem button>
            <ListItemText
              inset
              primary="Categorias"
              style={{ paddingLeft: '16px' }}
            />
          </ListItem>
        </NavLink>
        <NavLink
          style={{
            textDecoration: 'none'
          }}
          activeClassName="nav-item-selected"
          to="/imprenta/libros"
        >
          <ListItem button>
            <ListItemText
              inset
              primary="Libros"
              style={{ paddingLeft: '16px' }}
            />
          </ListItem>
        </NavLink>
      </List>
    );
  }
}

export default Nav;
