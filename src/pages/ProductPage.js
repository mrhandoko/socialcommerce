import React from 'react';
import { Table } from 'semantic-ui-react';

export default function ProductListPage(props: Props) {
  return (
    <div style={{ backgroundColor: 'white', height: 800, width: 1024, padding: 20 }}>
      <Table fluid celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="6" style={{ background: 'linear-gradient(180deg, #ec1c24 0%, #b22f40 100%)' }}>
              <p style={{ color: 'white' }}>
                List of Product
              </p>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell><p style={{ color: 'red' }}>#</p></Table.HeaderCell>
            <Table.HeaderCell><p style={{ color: 'red' }}>Product Name</p></Table.HeaderCell>
            <Table.HeaderCell><p style={{ color: 'red' }}>Category</p></Table.HeaderCell>
            <Table.HeaderCell><p style={{ color: 'red' }}>Date & Time & Length</p></Table.HeaderCell>
            <Table.HeaderCell><p style={{ color: 'red' }}>Cost</p></Table.HeaderCell>
            <Table.HeaderCell><p style={{ color: 'red' }}>Promo Code</p></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1.</Table.Cell>
            <Table.Cell>Pembesar</Table.Cell>
            <Table.Cell>Photography</Table.Cell>
            <Table.Cell>12/12/2017 14:00 3 days</Table.Cell>
            <Table.Cell>Rp 300.000</Table.Cell>
            <Table.Cell>JHD132</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              {/* <SemanticMenu floated="right" pagination>
                <SemanticMenu.Item as="a" icon>
                  <Icon name="left chevron" />
                </SemanticMenu.Item>
                <SemanticMenu.Item as="a">1</SemanticMenu.Item>
                <SemanticMenu.Item as="a">2</SemanticMenu.Item>
                <SemanticMenu.Item as="a">3</SemanticMenu.Item>
                <SemanticMenu.Item as="a">4</SemanticMenu.Item>
                <SemanticMenu.Item as="a" icon>
                  <Icon name="right chevron" />
                </SemanticMenu.Item>
              </SemanticMenu> */}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
