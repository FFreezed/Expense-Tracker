import React from 'react';

function Price({ amount, index, removeAmount}) {
  const removeHandle = i => {
    removeAmount(i);
  }
  
  const sign = amount.price < 0 ? '-' : '+';

  return (
    <div className={amount.price < 0 ? 'minus' : 'plus'}>
      <button className="remove-price" onClick={() => removeHandle(index)}>X</button>
      <div className="list">{sign}Rp{Math.abs(amount.price)}</div>
    </div>
  )
}

export default Price;