import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import createPetiteMetric from '../../components/Metrics/PetiteMetric';
import MonthlyMetrics from '../../components/Metrics/MonthlyMetrics';
import { petiteData, monthlyData } from '../../Models/data';
import Order from '../../components/Order';

import './dashinfo.css';

class DashInfo extends Component{
  state = {
    dailyTransacTionVolume: '2,345',
    dailyTransactionValue: 'N4,000,000',
    totalTransacTionVolume: '452,000',
    totalTransactionValue: 'N4,000,000',
    reconcilledOrder: 80,
    pendingOrder: 20,
    reconcilledPayments: 80,
    pendingPayments: 20,
    searchPayment: ''
  }
  render() {
    return (
      <div className='dash-container'>
       <div className='dash-content dash-section'>
         <div className='petite-info info-left'>
            {
              createPetiteMetric('Daily Transaction Volume', this.state.dailyTransacTionVolume, petiteData)
            }
            {
              createPetiteMetric('Daily Transaction Value', this.state.dailyTransactionValue, petiteData)
            }
         </div>
         <div className='petite-info info-right'>
            {
              createPetiteMetric('Total Transaction Volume', this.state.totalTransacTionVolume, petiteData)
            }
            {
              createPetiteMetric('Total Transaction Value', this.state.totalTransactionValue, petiteData)
            }
         </div>
       </div>
       <div className='dash-content dash-section'>
         <div className='met-nav-container'>
           <div className='metrics-navigation'>
             <div id='date'>
                <span>Today: </span>
                <span>5, August 2018</span>
             </div>
             <div id='search'>
                <select id='select-container'>
                  <option>1 Jan - 1 Jun</option>
                </select>
             </div>
             <div id='navigate'>
                <input type='button' value='<' id='left'/>
                <input type='button' value='>' id='right'/>
             </div>
           </div>
           <div className='month-metrics-display'>
            {
              monthlyData.map((data, idx) => <MonthlyMetrics key={idx} month={data.month} data={data.data}/>) 
            }
           </div>
         </div> 
         <div className='order-place'>
           <div>
           <Order 
              title='Orders' 
              reconcilled={this.state.reconcilledOrder} 
              pending={this.state.pendingOrder}
              order={true}
              />
              <Order 
              title='Payments' 
              reconcilled={this.state.reconcilledPayments} 
              pending={this.state.pendingPayments}
              order={false}
              />
           </div>
         </div>
       </div>
       <section className='dash-section'>
         <div className='pay-header'>
            <p>Payments</p>
         </div>
         <div className='dash-content'>
           <div className='dash-content showing'>
            <span>Showing</span>
            <span id='blue'>20
            <span id='caret'>&copy;</span>
            </span>
            <span>out of</span>
            <span>500</span>
            <span>Payments</span>
           </div>
           <div className='payment-search'>
            <FontAwesomeIcon icon={faSearch} color="#747574" transform="shrink-8" style={{fontWeight: '10px'}}/>
             <input placeholder='Search payments' value={this.state.searchPayment}/>
           </div>
           <div className='show-select'>
             <span>Show</span>
             <select>
               <option>All</option>
               <option>Reconcilled</option>
               <option>Un-reconcilled</option>
               <option>Settled</option>
               <option>Unsettled</option>
             </select>
           </div>
         </div>
       </section>
      </div>
    )
  }
}


export default DashInfo;
