import React, { Component } from 'react';
import ReactDOM from "react-dom"
import { Order } from './Order'
import { OrdersList } from './OrdersList'

export class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { senderCity: "", senderAddress: "", recipientCity: "", recipientAddress: "", weight: 0, pickUpDate: "" };

        this.onSubmit = this.onSubmit.bind(this);
        this.onSenderCityChange = this.onSenderCityChange.bind(this);
        this.onSenderAddressChange = this.onSenderAddressChange.bind(this);
        this.onRecipientCityChange = this.onRecipientCityChange.bind(this);
        this.onRecipientAddressChange = this.onRecipientAddressChange.bind(this);
        this.onWeightChange = this.onWeightChange.bind(this);
        this.onPickUpDateChange = this.onPickUpDateChange.bind(this);
    }
    onSenderCityChange(e) {
        this.setState({ senderCity: e.target.value });
    }
    onSenderAddressChange(e) {
        this.setState({ senderAddress: e.target.value });
    }
    onRecipientCityChange(e) {
        this.setState({ recipientCity: e.target.value });
    }
    onRecipientAddressChange(e) {
        this.setState({ recipientAddress: e.target.value });
    }
    onWeightChange(e) {
        this.setState({ weight: e.target.value });
    }
    onPickUpDateChange(e) {
        this.setState({ pickUpDate: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        var orderSenderCity = this.state.senderCity.trim();
        var orderSenderAddress = this.state.senderAddress.trim();
        var orderRecipientCity = this.state.recipientCity.trim();
        var orderRecipientAddress = this.state.recipientAddress.trim();
        var orderWeight = this.state.weight;
        var orderPickUpDate = this.state.pickUpDate
        if (!orderSenderCity || !orderSenderAddress || !orderRecipientCity || !orderRecipientAddress || !orderPickUpDate || orderWeight <= 0) {
            return;
        }
        this.props.onOrderSubmit({
            senderCity: orderSenderCity, senderAddress: orderSenderAddress, recipientCity: orderRecipientCity, recipientAddress: orderRecipientAddress, weight: orderWeight, pickUpDate: orderPickUpDate
        });
        this.setState({ senderCity: "", senderAddress: "", recipientCity: "", recipientAddress: "", weight: "", pickUpDate: "" });
    }
    render() {
        return (
            <div class='orderForm'>
                <form onSubmit={this.onSubmit}>
                    <h2>???????????????????? ???????????? ????????????:</h2>
                    <p>
                        ?????????? ??????????????????????:
                        <input type="text"
                            required
                            name="senderCity"
                            placeholder="senderCity"
                            value={this.state.senderCity}
                            onChange={this.onSenderCityChange} />
                    </p>
                    <p>
                        ?????????? ??????????????????????:
                        <input type="text"
                            required
                            placeholder="senderAddress"
                            value={this.state.senderAddress}
                            onChange={this.onSenderAddressChange} />
                    </p>
                    <p>
                        ?????????? ????????????????????:
                        <input type="text"
                            required
                            placeholder="recipientCity"
                            value={this.state.recipientCity}
                            onChange={this.onRecipientCityChange} />
                    </p>
                    <p>
                        ?????????? ????????????????????:
                        <input type="text"
                            required
                            placeholder="recipientAddress"
                            value={this.state.recipientAddress}
                            onChange={this.onRecipientAddressChange} />
                    </p>
                    <p>
                        ?????? ??????????:
                        <input type="number"
                            required
                            placeholder="weight"
                            value={this.state.weight}
                            onChange={this.onWeightChange} />
                    </p>
                    <p>
                        ???????? ???????????? ??????????:
                        <input type="date"
                            required
                            placeholder="pickUpDate"
                            value={this.state.pickUpDate}
                            onChange={this.onPickUpDateChange} />
                    </p>
                    <input type="submit" value="????????????????" />
                    
                </form>
            </div>
        );
    }
}

