import React from 'react'

function Header({total}) {
  const sign = total < 0 ? '-' : ' ';

  return (
    <header>
      <h3>Expense Tracker</h3>
      <div className="total">Saldo Anda : {sign}Rp{Math.abs(total)}</div>
      {/* <div className="total">Saldo Anda : Rp{total}</div> */}
    </header>
  )
}

export default Header;