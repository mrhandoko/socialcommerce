import React, { Component } from 'react';
import { Container, Card, Image, Button, Form } from 'semantic-ui-react';

import Logo from '../images/logo.png';

class ForgotPasswordPage extends Component {
  render() {
    return (
      <Container>
        <Card centered verticalAlign="middle" style={{ width: 500 }}>
          <Card.Header style={{ background: 'linear-gradient(76deg, #aa1f5a 0%, #c61e43 30%, #ec1c24 100%)' }}>
            <Image src={Logo} centered style={{ width: 180 }} />
          </Card.Header>
          <Card.Content>
            <Form>
              <Form.Field>
                <label>Forgot Password</label>
                <input placeholder="Email" />
              </Form.Field>
              <Button type="submit" fluid color="red" >Send Password</Button>
            </Form>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default ForgotPasswordPage;
