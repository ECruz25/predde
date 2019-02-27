import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core';

class Nav extends Component {
  handleOnChange = (e, value) => {
    this.props.handleOnChange(value === 0 ? 'categorias' : 'libros');
  };

  render() {
    return (
      <AppBar
        component="nav"
        style={{
          display: 'flex',
          marginLeft: '200px'
        }}
      >
        <Tabs onChange={this.handleOnChange}>
          <Tab label="Categorias" />
          <Tab label="Libros" />
        </Tabs>
        {/* <NavLink
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
        </NavLink> */}
      </AppBar>
    );
  }
}

export default Nav;
