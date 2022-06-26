import React from 'react';
import Price from './Price';

function PriceList({ amount, setAmount }) {
  const removeAmount = i => {
    let temp = amount.filter((v, index) => index !== i);
    setAmount(temp);
  }

  return (
    <div className='price-list'>
      {
        amount.map((value, index) => (
          <Price 
          key={index} 
          amount={value} 
          index={index} 
          removeAmount={removeAmount} 
          />
        ))
      }
    </div>
  )
}

export default PriceList;