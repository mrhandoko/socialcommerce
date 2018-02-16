import React, { Component } from 'react';
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Container, Card, Icon, Image } from 'semantic-ui-react';

import Logo from '../images/logo.png';

class LoginPage extends Component {
  render() {
    return (
      <Container>
        {/* <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}
        </style> */}
        {/* <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src={Logo} />
              {' '}Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Button color="teal" fluid size="large">Login</Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid> */}
        <Card centered>
          {/* <Card.Content header='Verikool' /> */}
          <Image src={Logo} style={{ width: 200, height: 50, resizeMode: 'contain' }} /> 
          <Card.Header style={{ backgroundColor: 'red' }}>
          </Card.Header>
          <Card.Content description="bunda fathan niiii" />
          <Card.Content extra>
            <Icon name='user' />
            4 Friends
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default LoginPage;
