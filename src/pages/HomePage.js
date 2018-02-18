import React from 'react';

import Header from '../base-ui/Header';
import SecondaryHeader from '../base-ui/SecondaryHeader';
import SidebarMenu from '../base-ui/SidebarMenu';
import ProductPage from './ProductPage';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <SecondaryHeader
          labelPage="Products"
        />
        <SidebarMenu
          visible={this.state.visible}
          children={<ProductPage />}
        />
      </div>
    );
  }
}
