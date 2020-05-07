import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import './EstimateTable.scss'
import LineItem from './LineItem';

const mapStateToProps = state => {
  return {
    lineItems: state.lineItems
  }
}

const EstimateTable = ({ lineItems }) => {
  return (
    <div className="Estimate-Table">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Part Description</th>
              <th>Cost</th>
              <th>Quantity</th>
              <th>Part Number</th>
              <th>Cost</th>
              <th>Hours of Labor</th>
              <th>Labor Cost</th>
              <th>Total Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lineItems.map((lineItem, index) => (
              <LineItem lineItem={lineItem} index={index} key={lineItem._id} />
            ))}
          </tbody>
        </Table>
    </div>
  )
}

export default connect(mapStateToProps)(EstimateTable);