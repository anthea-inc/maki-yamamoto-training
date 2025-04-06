import React from "react";

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li> // 任意のIDをKeyとして使う
      ))}
    </ul>
  );
}

export default ItemList;
