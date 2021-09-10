import React from "react";

function Sushi({ sushiObj, onEatSushi}) {
const { name, img_url, price, eaten } = sushiObj

  function handleClick() {
    if (!eaten) {
      onEatSushi(sushiObj);
    }
    else {
      alert('No more sushi on that plate!');
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
