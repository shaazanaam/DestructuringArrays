// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

console.log(cars);
const [honda,tesla]=cars;

const {coloursByPopularity :[teslaTopColour],speedStats:{topSpeed:teslaTopSpeed}} =tesla;
const {coloursByPopularity:[hondaTopColour], speedStats:{topSpeed:hondaTopSpeed}} =honda;
console.log(teslaTopColour);
console.log(teslaTopSpeed);
console.log(hondaTopColour);
console.log(hondaTopSpeed);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
