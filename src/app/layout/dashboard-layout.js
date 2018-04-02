import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Main from './components/main';

class DashboardLayout extends Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default DashboardLayout;