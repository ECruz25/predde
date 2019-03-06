import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { blue, red } from '@material-ui/core/colors';
import '../App.css'
class index extends Component {
  render() {
    return (
      <div style=
      {{
        width:"100%",  
        height:"100%",
        position: "absolute",
      }}>
      
        <div style=
      {{
        width:"50%",  
        height:"100%",
        display: "inline-block",
        background: "blue",
       
      }}>
        <NavLink to="/imprenta" style={{
          margin:"40%",
          color:"White"

         
        }}>Imprenta</NavLink>
        </div>
        <div style=
      {{
        width:"50%",  
        height:"100%",
        display: "inline-block",
        background: "red",
        
      }}>
        <NavLink to="/editorial" style={{
          margin:"40%",
          color:"Black"
        }}>Editorial</NavLink>
        </div>
       
      </div>
    );
  }
}

export default index;
