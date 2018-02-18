import React from 'react';
import { Button, Menu, Sidebar, Icon, Segment, Image } from 'semantic-ui-react';

import Paragraph from '../images/paragraph.png';

export default class SidebarMenu extends React.Component {
  // state = { visible: false };
  // toggleVisibility = () => this.setState({ visible: !this.state.visible });
  render() {
    const { visible } = this.props;
    return (
      <div>
        {/* <Button onClick={this.toggleVisibility}>Toggle Visibility</Button> */}
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <div>
              <h1>Application Content</h1>
              <Image src={Paragraph} />
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
