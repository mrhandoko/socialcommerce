import React, { Component } from 'react';
import { Container, Card, Image, Button, Form } from 'semantic-ui-react';

import Logo from '../images/logo.png';

class LoginPage extends Component {
  render() {
    return (
      <Container style={{ paddingTop: '15%' }}>
        <Card centered verticalAlign="middle" style={{ width: 500 }}>
          <Card.Header style={{ background: 'linear-gradient(76deg, #aa1f5a 0%, #c61e43 30%, #ec1c24 100%)' }}>
            <Image src={Logo} centered style={{ width: 180 }} />
          </Card.Header>
          <Card.Content>
            <Form>
              <Form.Field>
                <label>Username</label>
                <input placeholder="Username" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder="Password" />
              </Form.Field>
              <Button type="submit" fluid color="red" >Sign in</Button>
              <Form.Field>
                <p style={{ color: '#cacaca' }}>Forgot Your Password?</p>
              </Form.Field>
            </Form>
          </Card.Content>
          <Card.Content extra textAlign="center">
            <p style={{ color: 'red' }}>Don't have an Account? Register Now!</p>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default LoginPage;
