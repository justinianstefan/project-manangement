import React, { Component } from 'react';
import Projects from '.././projects/projects';
import Users from '.././users/users';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import logo from '../../assets/img/logo.svg';



const paperStyle = {
  height: '85%',
  width: "85%",
  margin: '7%',
  textAlign: 'center',
  display: 'inline-block',
};


class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "open": false,
      "show": null
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  showProjects = () => {
    this.setState({ show: 'projects', open: false });
  };

  showUsers = () => {
    this.setState({ show: 'users', open: false });
  };

  render() {
    let content = null;

    switch (this.state.show) {
      case 'users':
        content = (<Users />);
        break;

      case 'projects':
        content = (<Projects />);
        break;

      default:
        content = <h1>Waiting</h1>
    }

    return (
      <div className="dashboard">

        <AppBar
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          title="Learn about Drawer, MenuItem and Paper"
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer

          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}>
          <img src={logo} className="App-logo" alt="logo" />
          <AppBar title="AppBar" />
          <MenuItem id="showUsersId" onClick={this.showUsers}>Show Users</MenuItem>
          <MenuItem id="showProjectsId" onClick={this.showProjects}>Show Projects</MenuItem>

        </Drawer>
        <Paper style={paperStyle} zDepth={9}>

          {content}

        </Paper>
      </div>
    );
  }
}

export default DashboardLayout;