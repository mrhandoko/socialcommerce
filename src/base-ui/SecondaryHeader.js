import React from 'react';
import { Menu, Container, Search, Button, Icon } from 'semantic-ui-react';

export default class SecondaryHeader extends React.Component {
  render() {
    return (
      <Container fluid>
        <Menu
          fluid
          style={{ background: 'linear-gradient(76deg, #aa1f5a 0%, #c61e43 30%, #ec1c24 100%)', borderRadius: 0 }}
        >
          <Menu.Menu>
            <Button style={{ background: 'rgba(255,255,255,0)' }}>
              <Icon name="sidebar" inverted />
            </Button>
            <Search
              placeholder="Search..."
              style={{
                paddingTop: 8, paddingBottom: 8, paddingLeft: 5, paddingRight: 5,
              }}
            />
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}
