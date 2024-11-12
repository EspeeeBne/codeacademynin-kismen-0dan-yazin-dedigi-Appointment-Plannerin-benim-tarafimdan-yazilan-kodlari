import React from "react";

export const Tile = ({ name, description, deleteItem }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((value, index) => (
        <p key={index} className="tile">{value}</p>
      ))}
      <button onClick={deleteItem} className="delete-button">Delete</button>
    </div>
  );
};
