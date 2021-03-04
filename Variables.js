function func2(){// there are three types of Variables in JS
//1. var - global declaration, changeable
//2.let - local declaration within a Scope (block lvl Scope), changeable
//3.const - global declaration, Non changeable

var age = 25; // Number
var name = "John"; // String
var developer = true;// Boolean
var location = null; // Null
var task; // undefined

// let age = 25; // Number
// let name = "John"; // String
// let developer = true;// Boolean
// let location = null; // Null
// let task; // undefined
// let age= 50;
// console.log(age); // SyntaxError: identifier "age" has already been declared.

// const age = 20; 
// const job = 'developer';
// const name; // SyntaxError: missing initializer
// const num = 10;
// num = 20; //Compiler Error: Cannot assign to 'num' because it is a constant or read-only property

console.log('tut3');
// Variables in js
// var, let, const
var name = 'harry';
var channel;
var marks = 3454;
marks = 0;
channel = 'CodeWithHarry'
console.log(name, channel, marks);
// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/
var city = 'Delhi';
console.log(city);

const ownersName = 'Hari Ram';
// ownersName = 'Harry'; // Cannot do this (error)
console.log(ownersName);
const fruit = 'Orange';

{ //block level Scope
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);


const arr1 = [12,23,12,53, 3];
arr1.pop();//they both work with const
arr1.push(3,45);
console.log(arr1)
//here arr1 is changable ie more values can be inserted but arr1 cant be reassigned

/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 


*/
console.log("try to use less Var if possible")
}