import React from 'react';
import './order.css';

function Order({title, reconcilled, pending, order}) {
  return (
    <div className='order-container'>
      <div className='order-contents'>
        <h5 className='order-header'>{title}</h5>
        <div className='data-container'>
          <div className='data-flex'>
            <div style={{ width: reconcilled+ '%'}} id='green_bg'></div>
            <div style={{ width: pending + '%'}} id='yellow_bg'></div>
          </div>
        </div>
        <div>
          <div className='order-tx-container'>
            <span id='order-text'>{order ? 'Pending Order: ' : 'Un-reconcilled Payments: '}</span>
            <span id='yellow'>{pending}</span>
          </div>
          <div className='order-tx-container'>
            <span id='order-text'>{order ? 'Reconcilled Order: ' : 'Reconcilled Payments: '}</span>
            <span id='green'>{reconcilled}</span>
          </div>
          <div className='order-tx-container'>
            <span id='order-text'>{order ? 'Total Order: ' : 'Total Payments: '}</span>
            <span id='blue'>{reconcilled + pending}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Order