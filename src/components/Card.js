import React from "react";

function Card({ image, name, tech }) {
  return (
    <div className="card">
      <img src={image} alt="foodapi" />
      <h3>{name}</h3>
      <h4>{tech}</h4>
    </div>
  );
}

export default Card;
