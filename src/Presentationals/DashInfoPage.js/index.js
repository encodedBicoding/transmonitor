import React, { Component } from 'react';
import createPetiteMetric from '../../components/Metrics/PetiteMetric';
import { petiteData } from '../../Models/data';
import './dashinfo.css';

class DashInfo extends Component{
  state = {
    dailyTransacTionVolume: '2,345',
    dailyTransactionValue: 'N4,000,000',
    totalTransacTionVolume: '452,000',
    totalTransactionValue: 'N4,000,000'
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
         <div>
            ok
         </div> 
         <div>
            bye
         </div>
       </div>
      </div>
    )
  }
}


export default DashInfo;
