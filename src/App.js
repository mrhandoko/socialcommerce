import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

// import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import ForgotPasswordPage from './pages/ForgotPasswordPage';

class App extends Component {
  render() {
    return (
      <Container>
        {/* <LoginPage /> */}
        {/* <ForgotPasswordPage /> */}
        <RegisterPage />
      </Container>
    );
  }
}

export default App;
