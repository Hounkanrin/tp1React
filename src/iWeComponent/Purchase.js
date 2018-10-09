import React, { Component } from 'react';
import './Purchase.css'

export class Purchase extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { costs } = this.props
        return (
            <div className="Purchase">
                <table className="purchase_table">
                    <tbody>
                        {costs.map((cost, index) => {
                            return (
                                <tr key={index}>
                                    <td className="product">{cost.title}</td>
                                    <td> Paie by {cost.paidBy}</td>
                                    <td className="product"> {cost.amount} </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>
        )

    }


}
