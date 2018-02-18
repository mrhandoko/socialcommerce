import React, { Component } from 'react';
import { Container, Card, Image, Button, Form } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

import Logo from '../images/logo.png';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }
  render() {
    const { redirect } = this.state;
    return (
      <Container style={{ paddingTop: '10%' }}>
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
              <Button type="submit" fluid color="red" onClick={() => this.setState({ redirect: true })}>Sign in</Button>
              <Form.Field>
                <p style={{ color: '#cacaca', paddingTop: 5, paddingBottom: 5 }}>Forgot Your Password?</p>
              </Form.Field>
            </Form>
          </Card.Content>
          <Card.Content extra textAlign="center">
            <p>Don't have an Account? <Link to="/register" style={{ color: 'red' }}>Register Now!</Link></p>
          </Card.Content>
        </Card>
        {
          redirect && <Redirect to="/home" />
        }
      </Container>
    );
  }
}

export default LoginPage;
