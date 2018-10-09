import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { AddPurchase } from './iWeComponent/AddPurchase';
import { Purchase } from './iWeComponent/Purchase';
import { Filter } from './iWeComponent/Filter';
import { Total } from './iWeComponent/Total';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: ['Amine', 'Julie', 'Kevin'],
      costs: [
        { paidBy: 'Amine', title: 'Beer', amount: 15 },
        { paidBy: 'Julie', title: 'Buger', amount: 10 },
        { paidBy: 'Kevin', title: 'Tequila', amount: 25 },
        { paidBy: 'Kevin', title: 'Beer', amount: 20 },
        { paidBy: 'Julie', title: 'Beer', amount: 15 },
        { paidBy: 'Amine', title: 'Buger', amount: 30 }
      ],
    currentFilter :"tous",
    costFilter: [
      { paidBy: 'Amine', title: 'Beer', amount: 15 },
      { paidBy: 'Julie', title: 'Buger', amount: 10 },
      { paidBy: 'Kevin', title: 'Tequila', amount: 25 },
      { paidBy: 'Kevin', title: 'Beer', amount: 20 },
      { paidBy: 'Julie', title: 'Beer', amount: 15 },
      { paidBy: 'Amine', title: 'Buger', amount: 30 }
    ]
  }}

  handleAddCost = (fields) => {
    const newCost =  [...this.state.costs, fields];
    this.setState({
      costs: newCost,
    })
    let filtercost = this.filter(this.state.currentFilter,newCost);
    this.setState({filtercost});
  }

  handleFilter = (user) => {
    let costFilter = this.filter(user,this.state.costs); 
    this.setState({costFilter,currentFilter:user})
  }

  filter = (currentValue, collectionFilter)=>{
    let costFilter;
      if(currentValue==="tous"){
        costFilter = collectionFilter;
      }else{
        costFilter = collectionFilter.filter((item) => item.paidBy === currentValue); 
      }
      //this.setState({costFilter});
      return costFilter;
  }

  render() {
    const {  costFilter } = this.state;
    const { users } = this.state;
 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Integartion Week-end</h1>
          <Filter users={users} onFilter= {this.handleFilter}/>
        </header>
        <div className="Purchase">
          {/* <PurchaseTable costs={costs} /> */}
          <Purchase costs={costFilter} />
          <AddPurchase users={users} onAddCost={this.handleAddCost} />
          <Total costs={costFilter}/>
          
        </div>
      </div>
    );
  }
}

export default App;
