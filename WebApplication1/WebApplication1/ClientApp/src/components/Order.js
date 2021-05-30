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
        return <div class='order'>
            <p>ID(номер) заказа: 
                <label>{this.state.data.id}</label>
            </p>
            <p>Город отправителя:
                <label>{this.state.data.senderCity}</label>
            </p>
            <p>Адрес отправителя:
                <label>{this.state.data.senderAddress}</label>
            </p>
            <p>Город получателя:
                <label>{this.state.data.recipientCity}</label>
            </p>
            <p>Адрес получателя:
                <label>{this.state.data.recipientAddress}</label>
            </p>
            <p>Вес груза:
                <label>{this.state.data.weight}</label>
            </p>
            <p>Дата забора груза:
                <label>{this.state.data.pickUpDate.substring(0, 10)}</label>
            </p>

            <input onClick={this.onClick} type="submit" value="Удалить" />
        </div>;
    }
}
export default Order
