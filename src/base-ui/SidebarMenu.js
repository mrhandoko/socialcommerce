import React from 'react';
import { Menu, Sidebar, Icon } from 'semantic-ui-react'; 

export default class SidebarMenu extends React.Component {
  render() {
    const { visible, children } = this.props;
    return (
      <div>
        <Sidebar.Pushable style={{ borderRadius: 0, borderWidth: 0 }}>
          <Sidebar
            as={Menu}
            animation="push"
            width="thin"
            visible={visible}
            icon="labeled"
            vertical
            inverted
            style={{ backgroundColor: '#5e5e5e' }}
          >
            <Menu.Item name="dashboard">
              <Icon name="grid layout" /> Dashboard
            </Menu.Item>
            <Menu.Item name="order">
              <Icon name="conversation" />
              Order
            </Menu.Item>
            <Menu.Item name="transaction">
              <Icon name="cart" />
              Transaction
            </Menu.Item>
            <Menu.Item name="finances">
              <Icon name="calendar outline" />
              My Finances
            </Menu.Item>
            <Menu.Item name="product">
              <Icon name="heart" />
              Product
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
