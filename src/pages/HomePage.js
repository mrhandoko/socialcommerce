import React from 'react';
import { Image } from 'semantic-ui-react';

import Header from '../base-ui/Header';
import SecondaryHeader from '../base-ui/SecondaryHeader';
import SidebarMenu from '../base-ui/SidebarMenu';

import Paragraph from '../images/paragraph.png';

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
          children={
            <div style={{ backgroundColor: 'white', height: 1024 }}>
              <h1>Application Content</h1>
              <Image src={Paragraph} />
            </div>
          }
        />
      </div>
    );
  }
}
