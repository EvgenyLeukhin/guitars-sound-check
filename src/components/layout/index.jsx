import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Sidebar />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
