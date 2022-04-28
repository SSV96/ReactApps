//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDom from "react-dom";

const total = 50;

ReactDom.render(
  <div>
    <h1> Menu</h1>
    <ul>
      <li>PopCorn 10$</li>
      {/* An Expression will be evaluated into a single value */}
      <li>Pizza 20$</li>

      <li>Biriyani 100$ </li>

      <li>{` hello ${total}`} </li>
    </ul>
  </div>,
  document.getElementById("root")
);
