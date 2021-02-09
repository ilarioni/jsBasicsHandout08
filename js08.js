// Javascript type conversion 

// 5 different types of data that contains values 

// 1 string
// 2 number
// 3 boolean
// 4 object
// 5 function

// there are 6 types of Objects 
// 1 - Object
// 2 - Date
// 3 - Array
// 4 - String
// 5 - Number
// 6 - Boolean

// In JavaScript 2 data types cannot contain values 
// 1 -- null
// 2 -- undefined

console.log(typeof("John"));
console.log(typeof(3.14));
console.log(typeof(Nan));
console.log(typeof(false));
console.log(typeof([1,2,3,4]));
console.log(typeof(new Date()));
console.log(typeof(myCar));
console.log(typeof(null));
console.log(typeof({name:"ilia", age: 30}));
// console.log(typeof(function)); - returns function

console.log("john".constructor);  // function String() { [native code] }
console.log(3.14.constructor); // function Number() { [native code] }
console.log(false.constructor); // function Boolean() { [native code] }
console.log([1,2,3,4].constructor); // function Array() { [native code] }
console.log({name: "ilia", age:30}.constructor); // function Object() { [native code] }
console.log(new Date().constructor); // function Date() { [native code] }
console.log(function() {}.constructor); // function Function() { [native code] }

// converting numbers to string 

// String() method and toString() method. both converts numbers into string

// Javascript Bitwise Operations is important to see on chapter
