import React from 'react';

function Price({ amount, index, removeAmount}) {
  const removeHandle = i => {
    removeAmount(i);
  }

  const sign = amount.price < 0 ? '-' : '+';
  const removeSign = price => {
    return price.replace(/-/g, '');
  }

  return (
    <div className={amount.price < 0 ? 'minus' : 'plus'}>
      <button className="remove-price" onClick={() => removeHandle(index)}>X</button>
      <div className="list">{sign}Rp{removeSign(amount.price)}</div>
    </div>
  )
}

export default Price;