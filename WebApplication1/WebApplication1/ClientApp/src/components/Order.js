import React, { Component } from 'react';
import { OrderForm } from './OrderForm'
import { OrdersList } from './OrdersList'

export class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: props.order };
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        this.props.onRemove(this.state.data);
    }
    render() {
        return <div>
            <p>ID: {this.state.data.id}</p>
            <p>Город отправителя: {this.state.data.senderCity}</p>
            <p>Адрес отправителя: {this.state.data.senderAddress}</p>
            <p>Город получателя: {this.state.data.recipientCity}</p>
            <p>Адрес получателя: {this.state.data.recipientAddress}</p>
            <p>Вес груза: {this.state.data.weight}</p>
            <p>Дата забора груза: {this.state.data.pickUpDate.substring(0, 10)}</p>
            <p><button onClick={this.onClick}>Удалить</button></p>
        </div>;
    }
}
export default Order