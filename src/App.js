import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import ForgotPasswordPage from './pages/ForgotPasswordPage';
// import Header from './base-ui/Header';
// import SecondaryHeader from './base-ui/SecondaryHeader';
// import SidebarMenu from './base-ui/SidebarMenu';
import HomePage from './pages/HomePage';
// import ProductCategoryPage from './pages/ProductCategoryPage';

class App extends Component {
  render() {
    return (
      <div>
        {/* <LoginPage /> */}
        {/* <ForgotPasswordPage /> */}
        {/* <Header />
        <SecondaryHeader /> */}
        {/* <RegisterPage /> */}
        {/* <SidebarMenu /> */}
        {/* <ProductCategoryPage /> */}
        <Route exact path="/" component={LoginPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/home" component={HomePage}/>
      </div>
    );
  }
}

export default App;
