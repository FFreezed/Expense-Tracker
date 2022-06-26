import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PriceList from "./components/PriceList";
import "./App.css";

function App() {
  const [amount, setAmount] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < amount.length; i++) {
      temp += parseInt(amount[i].price);
    }

    setTotal(temp);
  }, [amount]);

  return (
    <div className="App">
      <Header total={total} />
      <Form amount={amount} setAmount={setAmount} />
      <PriceList amount={amount} setAmount={setAmount} />
    </div>
  );
}

export default App;
