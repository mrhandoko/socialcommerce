import React, { Component } from 'react';
import { Container, Card, Image, Button, Form } from 'semantic-ui-react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Logo from '../images/logo.png';

class RegisterPage extends Component {
  state = {
    date: new Date(),
  };
  handleChangeGender = (e, { value }) => this.setState({ value });
  handleChangeDate = date => this.setState({ date });
  render() {
    const { value, date } = this.state;
    const DateTimeFormat = global.Intl.DateTimeFormat;
    let muiTheme = getMuiTheme({
      palette: {
        primary1Color: 'red',
        primary2Color: 'red',
        primary3Color: 'red',
        accent1Color: 'red',
        accent2Color: 'red',
        accent3Color: 'red',
      },
      datePicker: {
        headerColor: 'red',
      },
      appBar: {
        height: 50,
      },
    });
    return (
      <Container style={{ paddingTop: '5%' }}>
        <Card centered verticalAlign="middle" style={{ width: 500 }}>
          <Card.Header style={{ background: 'linear-gradient(76deg, #aa1f5a 0%, #c61e43 30%, #ec1c24 100%)' }}>
            <Image src={Logo} centered style={{ width: 180 }} />
          </Card.Header>
          <Card.Content>
            <Form>
              <Form.Field>
                <label>Full Name</label>
                <input placeholder="Full Name" />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder="Email" />
              </Form.Field>
              <Form.Field>
                <label>Phone Number</label>
                <input placeholder="Phone Number" />
              </Form.Field>
              <Form.Field>
                <label>Username</label>
                <input placeholder="Email" />
              </Form.Field>
              <Form.Field>
                <label>Date of Birth</label>
                <MuiThemeProvider muiTheme={muiTheme}>
                  <DatePicker
                    hintText="De"
                    DateTimeFormat={DateTimeFormat}
                    mode="portrait"
                    okLabel="OK"
                    cancelLabel="Cancel"
                    locale="en"
                    autoOk
                    onChange={this.handleChangeDate}
                    defaultDate={date}
                    style={{ width: '100%' }}
                  />
                </MuiThemeProvider>
              </Form.Field>
              <Form.Field>
                <label>Jenis Kelamin</label>
                <Form.Group inline>
                  <Form.Radio label="Male" value="male" checked={value === 'male'} onChange={this.handleChangeGender} />
                  <Form.Radio label="Female" value="female" checked={value === 'female'} onChange={this.handleChangeGender} />
                </Form.Group>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder="Password" />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <input placeholder="Confirm Password" />
              </Form.Field>
              <p style={{ color: '#cacaca' }}>By tapping "Register" you agree to the Terms and Conditions</p>
              <Button type="submit" fluid color="red" >Register</Button>
            </Form>
          </Card.Content>
          <Card.Content extra textAlign="center">
            <p style={{ color: 'red' }}>Already have an Account? Login here!</p>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default RegisterPage;
