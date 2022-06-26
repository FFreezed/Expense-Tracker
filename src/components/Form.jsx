import React, { useRef } from 'react';

function Form({ amount, setAmount }) {
  const price = useRef(null);

  const AddAmount = e => {
    e.preventDefault();
    if(price.current.value === '') return;

    setAmount([...amount, {
      "price": price.current.value
    }]);

    price.current.value = null;
  }

  return (
    <form className='form-control' onSubmit={AddAmount}> 
        <input className='form-input' type="number" name='amount' id='amount' placeholder='Masukkan angka...' ref={price}/>
        <input className='form-submit' type="submit" value="Tambahkan"/>
    </form>
  )
}

export default Form;