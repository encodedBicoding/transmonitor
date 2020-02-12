import React, { PureComponent } from 'react';


class TableItem extends PureComponent{
  render({imageSrc, product, price, transaction_no, time, status}) {
    return (
      <div className='table-item-container'>
        <div className='dash-content'>
          <div className='payment-image'>
            <img alt={`Payment_image_for ${product}`} src={imageSrc}/>
          </div>
            <p id='table_text'>{product}</p>
            <p id='table_text'>{price}</p>
            <p id='table_text'>{transaction_no}</p>
            <p id='table_text'>{time}</p>
            <div className='status-container'>
                <div className='dash-content'>
                    <div 
                      className={status === 'pending' ? 'yellow' : status === 'reconcilled' ? 'green' : status === 'un-reconcilled' ? 'grey' : 'grey'}
                      >
                    </div>
                    <div>{toSentenceCase(status)}</div>
                </div>
            </div>
            <div>
              ^
            </div>
        </div>
      </div>
    )
  }
}

function toSentenceCase(string) {
  let fl = string[0].toUpperCase();
  let op = string.splice(1, string.length);
  return `${fl}${op}`
}

export default TableItem;
