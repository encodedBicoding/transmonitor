import React, { Component } from 'react';
import createPetiteMetric from '../../components/Metrics/PetiteMetric';
import createMonthlyMetrics from '../../components/Metrics/MonthlyMetrics';
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
  }
  render() {
    return (
      <div className='dash-container'>
       <div className='dash-content'>
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
       <div className='dash-content'>
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
              monthlyData.map((data) => createMonthlyMetrics(data.month, data.data)) 
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
      </div>
    )
  }
}


export default DashInfo;
