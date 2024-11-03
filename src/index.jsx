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


// array desctructuring
// const foo = ["one", "two", "three"];

// const [red, yellow, green] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // "three"

// Destructuring with more elements than the source
// In an array desctructuring with an array of length N specified on the right hand side 
// of the assignment., if the number of variables specified on the left-hand
// are more than N then only the first N variables are assigned values.
// The values of the remaining variables will be undefined

const foo = ["one", "two"];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); // undefined


// Desctructuring lets you swap the variables 
// without desctructuring the swapping requires a temporary variable
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]


// Parsing an array returned from a function 
// function f() {
//   return [1, 2];
// }

// const [a, b] = f();
// console.log(a); // 1
// console.log(b); // 2

// Ignoring returned values
 // You can ignore returned values that you are not interested in 
 function f(){
  return [1,2,3];
 }
 const [a1, ,b1]=f();

 // you can also ignore all the returned values

 [, ,]=f();
 


