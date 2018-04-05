import React, { Component } from 'react';
import ProjectMain from '.././project/project-main';
import UserMain from '.././user/user-main';
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
        content = (<UserMain />);
        break;

      case 'projects':
        content = (<ProjectMain />);
        break;

      default:
        content = <h1>Waiting</h1>
    }

    return (
      <div className="dashboard">

        <AppBar
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          title="Project Management"
          titleStyle={{ textAlign: "center" }}
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}>


          <AppBar iconElementLeft={<img src={logo} className="App-logo" alt="logo" />} />
          <MenuItem id="showUsersId" onClick={this.showUsers}>Show Users</MenuItem>
          <MenuItem id="showProjectsId" onClick={this.showProjects}>Show Projects</MenuItem>

        </Drawer>
        <Paper style={paperStyle} zDepth={1}>

          {content}

        </Paper>
      </div>
    );
  }
}

export default DashboardLayout;