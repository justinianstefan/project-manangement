import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Sidenav extends Component {
  state = {
    open: true
  };
  render() {
    return (
      <Drawer open={this.state.open} className="sidenav">
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}

export default Sidenav;