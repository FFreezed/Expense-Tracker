import React, { useRef } from 'react';

function Form({ amount, setAmount }) {
  //get price value from input field
  //addAmount handler
  // const addAmount = (e) => {
  //   e.preventDefault();
  //   setAmount(amount + 1);
  // }

  // const getPrice = (e) => {
  //   setAmount(e.target.value);
  // }

  const price = useRef(null);

  const AddAmount = e => {
    e.preventDefault();
    if(price.current.value === '') {
      alert('Tolong masukkan angka!');
      return;
    }
    if(price.current.value === '0') {
      alert('Tidak boleh diisi dengan 0');
      return;
    }

    setAmount([...amount, {
      "price": price.current.value
    }]);

    price.current.value = null;
  }

  return (
    <form className='form-control' onSubmit={AddAmount}>
      <label className='label-input' for="info">Note : (-) Pengeluaran</label>
        <input className='form-input' type="number" name='amount' id='amount' placeholder='Masukkan angka...' ref={price}/>
        <input className='form-submit' type="submit" value="Tambahkan"/>
    </form>
  )
}

export default Form;