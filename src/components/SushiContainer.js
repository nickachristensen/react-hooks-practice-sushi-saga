import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushisData, onEatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0);

  const sushiComponents = sushisData.slice(sushiIndex, sushiIndex +4 )
    .map(sushi => (
    <Sushi key={sushisData.id} sushiObj={sushi} onEatSushi={onEatSushi} />
  ))

function handleClickMore() {
  setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushisData.length);
  }
  
  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onClickMore={handleClickMore}/>
    </div>
  );
}

export default SushiContainer;