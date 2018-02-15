import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (
      <Container>
        <LoginPage />
      </Container>
    );
  }
}

export default App;
