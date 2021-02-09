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

// Regular Expressions - RegExp

// i is a modifier, that modifies search to be case-insensitive

var str = "Visit W3Schools";
var n = str.search(/w3schools/i);
console.log(n);

var str1 = "Visit Microsoft";
var res = str1.replace(/microsoft/i, "W3Schools");
console.log(res);

// several modifiers that makes concrete tasks
// i - case insensitive
var str2 = "Visit Nuremberg";
var patt2 = /nuremberg/i;
var result2 = str2.match(patt2);
console.log(result2);

// g - perform a global match
var str3 = "Is this all there is?";
var patt3 = /is/g;
var result3 = str3.match(patt3);
console.log(result3);

// m - for multiline search

// Brackets
// [abc] - find any character between the brackets
var str4 = "Is this all there hell?";
var patt4 = /[h]/g;
var result4 = str4.match(patt4);
console.log(result4);

// [0-9] find any digits between the brackets
var str5 = "156452673890";
var patt5 = /[1-4]/g;
var result5 = str5.match(patt5);
console.log(result5);

// (x|y) find any of the alternatives separated with |
var str6 = "re, green, red, green, gren, gr, blue, yellow";
var patt6 = /(red|green)/g;
var result6 = str6.match(patt6);
console.log(result6);
