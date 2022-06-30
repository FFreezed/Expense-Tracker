import React from 'react';

function Price({ amount, index, removeAmount}) {
  const removeHandle = i => {
    removeAmount(i);
  }
  
  const sign = amount.price < 0 ? '-' : '+';
  
  const text = amount.price < 0 ? 'Out' : 'In';

  return (
    <>
    <div className={amount.price < 0 ? 'minus' : 'plus'}>
      <a className="remove-price" onClick={() => removeHandle(index)}>x</a>
      <span className={amount.price < 0 ? 'out' : 'in'}>{text}</span>
      <div className="list">{sign}Rp{Math.abs(amount.price)}</div>
    </div>
    </>
    
  )
}

export default Price;