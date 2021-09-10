import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(100);

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then((data) => {
        setSushis(data)
      })
  }, [])

  function handleEatSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });

      setSushis(updatedSushis);
      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("Need more 💸");
    }
  }
  const eatenSushis = sushis.filter(sushi => sushi.eaten);

  return (
    <div className="app">
      <SushiContainer sushisData={sushis} onEatSushi={handleEatSushi}/>
      <Table plates={eatenSushis} wallet={wallet}/>
    </div>
  );
}

export default App;
