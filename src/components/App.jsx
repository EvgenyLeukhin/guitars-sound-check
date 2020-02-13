import React from 'react';

import EnterScreen from '../screens/Enter';
import MainScreen  from '../screens/Main';

import { beep } from 'Sounds/beep';

class App extends React.Component {
  state = {
    launch: false,
    screen: 'enter'
  }

  onLogoClick = () => {
    beep.play();
    this.setState({ launch: true });
    setTimeout(() => {
      this.setState({ screen: 'main' });
    }, 2000);
  }

  render() {
    const { screen, launch } = this.state;

    return (
      <>
        { screen === 'enter' && <EnterScreen launch={launch} onLogoClick={this.onLogoClick} /> }
        { screen === 'main'  && <MainScreen /> }
      </>
    );
  }
}

export default App;
