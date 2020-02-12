import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Routes from './../routes';
import Layout from './layout';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    );
  }
}

export default App;
