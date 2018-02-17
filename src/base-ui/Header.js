import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

export default class Header extends React.Component {
  state = { activeItem: 'home' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Container fluid style={{ background: 'white' }}>
        <Menu
          fluid
          size="large"
        >
          <Container>
            <Menu.Item active={activeItem === 'home'} onClick={this.handleItemClick}>
              Hlasdfadsfaf
            </Menu.Item>
            <Menu.Item name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick} />
            <Menu.Item name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick} />
            <Menu.Menu position="right">
              <Menu.Item name="logout" active={activeItem === 'logout'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Container>
        </Menu>
      </Container>
    );
  }
}
