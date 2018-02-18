import React, { Component } from 'react';
import {
  Container,
  Card,
  Image,
  Menu,
  Form,
  Sidebar,
  Button,
  Search,
  Checkbox,
} from 'semantic-ui-react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Logo from '../images/big-logo.png';
import Paragraph from '../images/paragraph.png';

class ProductCategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      category: 'Product Category',
      date: new Date(),
    };
  }
  handleChangeDate = date => this.setState({ date });
  handleItemClick = (e, { name }) => this.setState({ category: name })
  render() {
    const { category, date } = this.state;
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
      <Container style={{ paddingTop: '5%', paddingBottom: '5%' }}>
        <Card centered verticalAlign="middle" style={{ width: 700 }}>
          <Card.Header style={{
            background: 'linear-gradient(76deg, #aa1f5a 0%, #c61e43 30%, #ec1c24 100%)',
          }}
          >
            <Image src={Logo} centered style={{ paddingTop: 10, paddingBottom: 10 }} />
          </Card.Header>
          <Card.Header>
            <Menu secondary style={{ paddingTop: 0, paddingBottom: 0, borderRadius: 0 }}>
              <Container>
                <h3 style={{ padding: 20 }}>Product Category</h3>
              </Container>
            </Menu>
          </Card.Header>
          <Card.Header>
            <Container>
              <Menu
                fluid
                style={{
                  background: 'linear-gradient(76deg, #aa1f5a 0%, #c61e43 30%, #ec1c24 100%)',
                  borderRadius: 0,
                }}
              >
                <Menu.Menu>
                  <Search
                    placeholder="Search..."
                    style={{
                      paddingTop: 8, paddingBottom: 8, paddingLeft: 5, paddingRight: 5,
                    }}
                  />
                  <Menu.Item />
                  <p style={{ color: 'white', padding: 18, fontSize: 15 }}>
                    {this.state.category}
                  </p>
                </Menu.Menu>
              </Menu>
            </Container>
          </Card.Header>
          <Card.Header>
            <Sidebar.Pushable>
              <Sidebar
                as={Menu}
                animation="push"
                width="thin"
                visible
                icon="labeled"
                vertical
                inverted
                style={{ width: 200, backgroundColor: '#5e5e5e' }}
              >
                <Menu.Item
                  name="Animator"
                  active={category === 'Animator'}
                  onClick={this.handleItemClick}
                >
                  Animator
                </Menu.Item>
                <Menu.Item
                  name="Content Creator"
                  active={category === 'Content Creator'}
                  onClick={this.handleItemClick}
                >
                  Content Creator
                </Menu.Item>
                <Menu.Item
                  name="Fashionista"
                  active={category === 'Fashionista'}
                  onClick={this.handleItemClick}
                >
                  Fashionista
                </Menu.Item>
                <Menu.Item
                  name="Foodist"
                  active={category === 'Foodist'}
                  onClick={this.handleItemClick}
                >
                  Foodist
                </Menu.Item>
                <Menu.Item
                  name="Gamer"
                  active={category === 'Gamer'}
                  onClick={this.handleItemClick}
                >
                  Gamer
                </Menu.Item>
                <Menu.Item
                  name="Make Up Artist"
                  active={category === 'Make Up Artist'}
                  onClick={this.handleItemClick}
                >
                  Make Up Artist
                </Menu.Item>
                <Menu.Item
                  name="Modelling"
                  active={category === 'Modelling'}
                  onClick={this.handleItemClick}
                >
                  Modelling
                </Menu.Item>
                <Menu.Item
                  name="Musician"
                  active={category === 'Musician'}
                  onClick={this.handleItemClick}
                >
                  Musician
                </Menu.Item>
                <Menu.Item
                  name="Photography"
                  active={category === 'Photography'}
                  onClick={this.handleItemClick}
                >
                  Photography
                </Menu.Item>
                <Menu.Item
                  name="Traveller"
                  active={category === 'Traveller'}
                  onClick={this.handleItemClick}
                >
                  Traveller
                </Menu.Item>
                <Menu.Item
                  name="Video Creator"
                  active={category === 'Video Creator'}
                  onClick={this.handleItemClick}
                >
                  Video Creator
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher>
                <div style={{
                  marginLeft: 80, marginRight: 200, paddingTop: 20, paddingBottom: 20,
                  }}
                >
                  <Form>
                    <Form.Field>
                      <label>Product Name</label>
                      <input placeholder="Product Name" />
                    </Form.Field>
                    <Form.Field>
                      <label>Product Type</label>
                      <Checkbox label={<label>Check all the selections! </label>} />
                    </Form.Field>
                    <div>
                      <Checkbox label={<label>Endorsement Photo (EP)</label>} />
                    </div>
                    <div>
                      <Checkbox label={<label>Meet & Greet (MG)</label>} />
                    </div>
                    <div>
                      <Checkbox label={<label>Endorsement Video (EV)</label>} />
                    </div>
                    <div>
                      <Checkbox label={<label>Photoshoot (PS)</label>} />
                    </div>
                    <div>
                      <Checkbox label={<label>Concept Creation (CC)</label>} />
                    </div>
                    <div style={{ paddingBottom: 15 }}>
                      <Checkbox label={<label>Other/Custom (OC)</label>} />
                    </div>
                    <Form.Field>
                      <label>Date & Time</label>
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
                      <label>Delivery Time</label>
                      <input placeholder="Delivery Time" />
                    </Form.Field>
                    <Form.Field>
                      <label>Location</label>
                      <input placeholder="Location" />
                    </Form.Field>
                    <Form.Field>
                      <label>Provided</label>
                      <Form.Field>
                        <label>Product Type</label>
                        <Checkbox label={<label>Check all the selections! </label>} />
                      </Form.Field>
                      <div>
                        <Checkbox label={<label>Camera</label>} />
                      </div>
                      <div>
                        <Checkbox label={<label>Lighting</label>} />
                      </div>
                      <div style={{ paddingBottom: 15 }}>
                        <Checkbox label={<label>Lens</label>} />
                      </div>
                    </Form.Field>
                    <Card fluid style={{ padding: 15 }}>
                      <Form.Field>
                        <label>Production Cost</label>
                      </Form.Field>
                      <Form.Field>
                        <label>Location</label>
                        <input placeholder="Location" />
                      </Form.Field>
                      <Form.Field>
                        <label>Models</label>
                        <input placeholder="Models" />
                      </Form.Field>
                      <Form.Field>
                        <label>Transportation</label>
                        <input placeholder="Transportation" />
                      </Form.Field>
                      <Form.Field>
                        <label>Total Production Cost: Rp 300.000</label>
                      </Form.Field>
                    </Card>
                    <div style={{ paddingBottom: 15, paddingTop: 15 }}>
                      <Button type="submit" fluid color="red">Submit</Button>
                    </div>
                  </Form>
                </div>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Card.Header>
          <Card.Content extra style={{ background: 'linear-gradient(76deg, #aa1f5a 0%, #c61e43 30%, #ec1c24 100%)' }} />
        </Card>
      </Container>
    );
  }
}

export default ProductCategoryPage;
