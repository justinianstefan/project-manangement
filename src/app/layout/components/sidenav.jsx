import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import logo from '../../../assets/img/logo.svg'; 

class Sidenav extends Component {
  state = {
    open: true
  };
  render() {
    return (
      <Drawer open={this.state.open} className="sidenav">
        <img src={logo} className="App-logo" alt="logo" /> 
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}

export default Sidenav;