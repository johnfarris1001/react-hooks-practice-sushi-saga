import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushis, eatSushiPiece, money }) {
  const [beltPosition, setBeltPosition] = useState(1)

  const sushiToDisplay = sushis.filter(sushi => {
    return (sushi.id <= (beltPosition * 4)) && (sushi.id >= (beltPosition * 4 - 3))
  }).map(sushi => {
    return <Sushi key={sushi.id} sushi={sushi} eatSushiPiece={eatSushiPiece} money={money} />
  })

  function moveBelt() {
    if (beltPosition === 25) {
      setBeltPosition(1)
      return
    }
    setBeltPosition(beltPosition + 1)
  }

  return (
    <div className="belt">
      {sushiToDisplay}
      <MoreButton moveBelt={moveBelt} />
    </div>
  );
}

export default SushiContainer;
