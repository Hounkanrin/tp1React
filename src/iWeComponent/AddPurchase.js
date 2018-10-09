import React, { Component } from 'react';
import './AddPurchase.css'

export class AddPurchase extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const cost = {
            title: this.title.value,
            paidBy: this.paidBy.value,
            amount: this.amount.value
        };
        this.props.onAddCost(cost);

    }

    render() {
        const { users } = this.props;
        return (
            <div className="add-user">
                <form onSubmit={this.handleSubmit} className="add-user-form">
                    
                        <input className="add-name" type="text" placeholder="What?" name="title" ref={title => this.title = title} />
                        <select className="add-paidby" placeholder="Who?" name="paidBy" ref={paidBy => this.paidBy = paidBy}>
                            {users.map((user, index) => {
                                return (
                                    <option key={index}>{user}</option>
                                )
                            })}
                        </select>
                        <input className="add-cost" type="number" placeholder="SS" name="amount" ref={amount => this.amount = amount} />
                        <button type="submit" className="add-button">+</button>
                    
                </form>
            </div>
        )
    }
}
