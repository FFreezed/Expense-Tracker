import React from 'react'

function Header({total}) {
  const sign = total < 0 ? '-' : ' ';

  return (
    <header>
      <h3 className='header'>Expense Tracker</h3>
      <div className="total">Saldo Anda : <span className='saldo'>{sign}Rp{Math.abs(total)}</span></div>
      {/* <div className="total">Saldo Anda : Rp{total}</div> */}
    </header>
  )
}

export default Header;