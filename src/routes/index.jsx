import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home       from './Home';
import SecondPage from './SecondPage';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/'    exact     component={Home}/>
        <Route path='/second-page'   component={SecondPage}/>
      </Switch>
    );
  }
}

export default Routes;
