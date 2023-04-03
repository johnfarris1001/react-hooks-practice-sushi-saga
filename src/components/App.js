import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [eatenSushi, setEatenSushi] = useState([])
  const [customerMoney, setCustomerMoney] = useState(100)

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => setSushis(data))
  }, [])

  function eatSushiPiece(sushi) {
    setEatenSushi([...eatenSushi, sushi])
    setCustomerMoney(customerMoney - sushi.price)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushiPiece={eatSushiPiece} money={customerMoney} />
      <Table plates={eatenSushi} money={customerMoney} />
    </div>
  );
}

export default App;
