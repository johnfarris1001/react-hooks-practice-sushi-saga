import React, { useState } from "react";

function Sushi({ sushi, eatSushiPiece, money }) {
  const [eaten, setEaten] = useState(false)

  function eatSushi() {
    if (sushi.price > money) {
      return
    }
    setEaten(true)
    eatSushiPiece(sushi)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
