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
        background: "green",
       
      }}>
        <div style=
      {{
        margin:"40%",
        display: "inline-block",
      }}>
        <NavLink to="/imprenta" style={{
          
          color:"White"

         
        }}>Imprenta</NavLink>
        </div>
        </div>
        <div style=
      {{
        width:"50%",  
        height:"100%",
        display: "inline-block",
        background: "red",
        
      }}>
      <div style=
      {{
        margin:"40%",
        display: "inline-block",
      }}>
      <NavLink to="/editorial" style={{
         
          color:"Black"
        }}>Editorial</NavLink>
      </div>
        
        </div>
       
      </div>
    );
  }
}

export default index;
