import React from "react";

function SimpleList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li> // key を指定していない
      ))}
    </ul>
  );
}

export default SimpleList;
