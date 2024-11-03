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

 // Array desctructuring calls the iterable protocol of the 
 //right side . Therefore any iterable not necessarily arrays
 //can be destructured

 const[a2,b2] =new Map([[1,2],[3,4]]);

 // Non iterables cannot be destructured as an array

 const obj = {
  *[Symbol.iterator]() {
    for (const v of [0, 1, 2, 3]) {
      console.log(v);
      yield v;
    }
  },
};
const [a3, b3] = obj; // Only logs 0 and 1

// the rest bindings are eagerly evaluated and creates a new array,
//Instead of using th eold iterable

const [a4,b4, ...rest]=obj;
console.log(rest)  //[2,3]

//Object destructuring 

const user ={
  id :42,
  isVerified:true,
};

const {id, isVerified}= user;
console.log(id) // 42
console.log(isVerified) // true

// A property can be unpacked from an object and assigned with 
// a different name than the object property
const o ={p:42,q:true};
const {p:foo1,q:bar}=o;
console.log(foo1); // 42
console.log(bar); // true

// very important concept
// Unpacking properties from objects passed as a function parameter
// Objects passed into function parameters 
// can also be unpacked into variables, which
//  may then be accessed within the function body. 
//  As for object assignment, the destructuring syntax 
//  allows for the new variable to have the same name or
//   a different name than the original property, and to 
//   assign default values for the case when the original 
//   object does not define the property.
//Here we show how to unpack a property of the passed object 
// into a variable with the same name. The parameter value
//  { id } indicates that the id property of the object passed 
//  to the function should be unpacked into a variable with the same name,
//   which can then be used within the function.
// Consider this object, which contains information about a user.

const user1 = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
};

function userID ({id}){
  return id;
}

 console.log(userID(user1)); // 42

//  You can define the name of the unpacked variable.
//  Here we unpack the property named displayName, 
//  and rename it to dname for use within the function body.

function userDisplayName({ displayName: dname }) {
  return dname;
}

console.log(userDisplayName(user)); // "jdoe"

//Nested objects can also be unpacked. 
// The example below shows the property fullname.firstName 
//being unpacked into a variable called name.

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is Jane"


//Setting a function parameter's default value
//In the function signature for drawChart above, 
//the destructured left-hand side has a default value of an empty object = {}.

function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});

// Nested Object destructuring
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localizationTags: [],
      lastEdit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"


// For Of iteration and destructuring
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"


//The prototype chain is looked up when the object is deconstructed
// When deconstructing an object, if a property is not 
// accessed in itself, it will continue to look up along the prototype chain.
const obj3 = {
  self: "123",
  __proto__: {
    prot: "456",
  },
};
const { self, prot } = obj3;

console.log(self); // "123"
console.log(prot); // "456"


