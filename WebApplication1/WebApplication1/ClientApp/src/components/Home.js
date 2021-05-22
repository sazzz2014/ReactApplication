import React, { Component } from 'react';
import { Order } from './Order'
import { OrderForm } from './OrderForm'
import { OrdersList } from './OrdersList'
import { Route } from 'react-router';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>

            <OrdersList apiUrl="/api/Orders" />
      </div>
    );
  }
}
