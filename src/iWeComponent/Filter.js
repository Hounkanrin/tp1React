import React, { Component } from 'react';

export class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
        };
    }

    handleChange = (e) => {
        const curValue = e.target.value;
        // this.setState({user: curValue});
        this.setState({curValue});
        this.props.onFilter(curValue);
    }

    render() {
        const { users } = this.props;
       
        return (
            <div className="filter-container">
                <label className="filter-label" htmlFor="filter-select">Filter</label>
                <select id="filter-select" className="filter-select" value={this.state.user} onChange={this.handleChange}>
                    <option value="tous">tous</option>
                    {users.map((user, index) => {
                        return (
                            <option key={index} value={user}>{user}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

