import React, { Component } from 'react';

// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Header from './base-ui/Header';
import SecondaryHeader from './base-ui/SecondaryHeader';

class App extends Component {
  render() {
    return (
      <div>
        {/* <LoginPage /> */}
        {/* <ForgotPasswordPage /> */}
        <Header />
        <SecondaryHeader />
        {/* <RegisterPage /> */}
      </div>
    );
  }
}

export default App;
