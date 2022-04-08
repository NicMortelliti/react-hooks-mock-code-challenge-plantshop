import React, { useState } from "react";

function PlantCard({ plant: { id, name, image, price }, stockClick }) {
  const [priceStockState, setPriceStockState] = useState(price);

  function handleStockUpdate(e) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: 0 }),
    })
      .then(r => r.json())
      .then(updatedItem => setPriceStockState(updatedItem.price));
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {priceStockState}</p>
      {priceStockState ? (
        <button className="primary" onClick={handleStockUpdate}>
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
