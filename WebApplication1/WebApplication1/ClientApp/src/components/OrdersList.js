import React, { Component } from 'react';
import { Order } from './Order'
import { OrderForm } from './OrderForm' 
 
export class OrdersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { orders: [] };

        this.onAddOrder = this.onAddOrder.bind(this);
        this.onRemoveOrder = this.onRemoveOrder.bind(this);
    }
    // загрузка данных
    loadData() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", this.props.apiUrl, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ orders: data });
        }.bind(this);
        xhr.send();
    }
    componentDidMount() {
        this.loadData();
    }
    // добавление объекта
    onAddOrder(order) {
        if (order) {
            const data = new FormData();
            data.append("senderCity", order.senderCity);
            data.append("senderAddress", order.senderAddress);
            data.append("recipientCity", order.recipientCity);
            data.append("recipientAddress", order.recipientAddress);
            data.append("weight", order.weight);
            data.append("pickUpDate", order.pickUpDate);
            var xhr = new XMLHttpRequest();

            xhr.open("post", this.props.apiUrl, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    this.loadData();
                }
            }.bind(this);
            xhr.send(data);
        }
    }
    // удаление объекта
    onRemoveOrder(order) {
        if (order) {
            var url = this.props.apiUrl + "/" + order.id;
            var xhr = new XMLHttpRequest();
            xhr.open("delete", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function () {
                if (xhr.status === 200) {
                    this.loadData();
                }
            }.bind(this);
            xhr.send();
        }
    }
    render() {
        var remove = this.onRemoveOrder;
        return <div>
            <OrderForm onOrderSubmit={this.onAddOrder} />
            <form>
                <h2>Список текущих заказов:</h2>
                {
                    this.state.orders.map(function (order) {
                        return <Order key={order.id} order={order} onRemove={remove} />
                    })
                }
            </form>
        </div>;
    }
}