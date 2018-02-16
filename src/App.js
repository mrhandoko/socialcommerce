import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }
}

export default App;
