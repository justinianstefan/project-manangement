import React, { Component } from 'react';
import Sidenav from './components/sidenav';
import Main from './components/main';

class DashboardLayout extends Component {
  render() {
    return (
      <div className="dashboard">
        <Sidenav />
        <Main />
      </div>
    );
  }
}

export default DashboardLayout;