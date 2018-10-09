import React, { Component } from 'react';
import './Total.css'

export class Total extends Component {
    constructor(props) {
        super(props)
    }

    convertToInt = function (value) {
        if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
          return Number(value);
        return NaN;
    }

    render() {
        // const { costs } = this.props
        // const sum = costs.reduce(((accumulator, currentValue) => accumulator + currentValue.amount), 0);
    
        const {costs} = this.props;
        const amount = costs.map(costs => costs.amount); 
        const amountToInt = amount.map(x => this.convertToInt(x))
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        return (
            <div className="total">
              
                    <div className="tot">Total  </div>
                    {/* <span> {sum}</span> */}
                    <div>
                        {amountToInt.reduce(reducer, 0)}
                    </div>

              
            </div>
        )
    }


}           
   
