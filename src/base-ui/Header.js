import React from 'react';
import { Menu, Container, Image, Icon } from 'semantic-ui-react';

import avatar from '../images/square-image.png';
import Logo2 from '../images/logo2.png';

export default class Header extends React.Component {
  state = { activeItem: 'home' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    return (
      <Container fluid style={{ background: 'white' }}>
        <Menu
          fluid
          size="large"
          color="red"
          style={{ borderRadius: 0 }}
        >
          <Container fluid>
            <Menu.Item onClick={this.handleItemClick} style={{ paddingTop: 5, paddingBottom: 5 }}>
              <Image src={avatar} size="tiny" circular style={{ width: 40, height: 40 }} />
            </Menu.Item>
            <Menu.Item name="Jane Doe" onClick={this.handleItemClick} />
            <Container textAlign="center">
              <Image src={Logo2} style={{ width: 100, padding: 10 }} centered />
            </Container>
            <Menu.Menu position="right">
              <Menu.Item onClick={this.handleItemClick}>
                <Icon name="setting" size="large" color="red" />
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Container>
    );
  }
}
