/**
 *  DATA TYPES:
 * 
 * 0. Data types are basically the types of values we use in programming. These types can range from just numbers to whole complex functions.
 *  When it comes to data types there are two major categories, simple and complex. There are also ways to check what type of value our value is.
 *  There are also different ways we pass on these data types depending on what the data type is.
 * 
 * 1. Numbers represent numeric values, both intergers and floating-point numbers.
 * 
 * 2. A string is the data type we use to refrence words and letters.
 *   We wrap our value in single (' ') or double quotes (" ")
 *
 * 3. A boolean data type only has two possible values - true or false.
 *    They are a powerful tool we use to determine things in our code.
 * 
 * 4. Arrays are a group of values contained together by brackets. ([])
 *    Arrays are a zero indexed list. That means their first value or element, is referred to as 0.
 *    They can store not only multiple values but multiple types.
 *    Each new value is seperated by a comma.
 * 
 * 5. Objects are what can be called a list of values describing something.
 *    Objects are also represented by a pair of curly braces. { }
 *    An Object is another type of JavaScript collection, however unlike an Array, values inside an Object are not ordered, nor do they have an index.
 *    They are versatile and can be used to create complex data structures.
 *    Within the object, we use whats called key/value pairs.
 * 
 * 6. Functions represents a reusable block of code that can be invoked by its name.
 *    Functions can take arguments, perform tasks, and return a value.
 * 
 * 7. Undefined represents a value that is not defined or has not been assigned.
 *    If a variable is declared but not assigned a value, it will have the value undefined by default. 
 * 
 * 8. Null Represents the absence of any object value.
 *    It is a special value that indicates the intentional absence of an object value.
 *    Treated as falsy for boolean operations.
 *    Written as just null.
 * 
 * 9. NaN is a value representing Not-A-Number.
 *    It is not equal to any value, not even itself
 * 
 * 10. Infinity represents a value that is greater than any other number in Javascript
 *     While -Infinity represents a value that is smaller than any other number.
 * 
 * 11. Simple and Complex Data Types
 *     Simple data types include: Strings, Numbers, Booleans, Null, and Undefined.
 *     Simple data types are immutable, meaning their values cannot be changed once assigned.
 *     When you perform operations on simple data types, new values are created rather than modifying the existing ones.
 *     Complex data types include Objects, Arrays, Functions, and a few others.Complex data types are mutable, meaning their values can be modified after creation.
 *     When you assign a complex data type to a variable, the variable holds a reference to the location in memory where the data is stored, rather than the actual data itself. 
 *     Modifying the data through one reference will affect all other references to the same data.
 * 
 * 
 * 12.  Passing by Copy/Value and Passing by Refrence
 *      When you pass a simple data type to a function, a copy of the value is created and passed to the function.
 *      Any changes made to the copy within the function do not affect the original value outside of it. 
 *      When you pass a complex data type to a function, a reference to the original value is passed.
 *      This means that both the original value and the parameter within the function point to the same memory location.
 *      As a result, modifications made to the value within the function affect the original value.
 * 
 */

// 1. Number //
// Here we assign our variable a number with no other characters to show that it should read as a number

let number = 42;
console.log(number); // => logs 42

// 2. String //
// Here we assign our variable a group of letters wrapped in single/double quotes

let string = 'Hello World!';
console.log(string); // => logs 'Hello World!'

// Using either is okay, but it is good practice to use the same type consistently throuought your code.
// If you want to use quotes inside your string, the easiest way to use them is by using the opposite of your defining set.

let quote = '"Hello there Jim" said Frank';
console.log(quote); // => logs '"Hello there Jim" said Frank'

// We can also access specific parts of our string like this
console.log(string[0]); // => logs 'H'
// By putting brackets behind our variable's name with a number we access that specific character
// Strings among other data types are considered zero indexed so it refers to the first character as 0.


// 3. Boolean //
// Here we assign our variable the word 'true' and 'false' these are reserved words that contain special properties

let bool = true;
console.log(bool); // => logs true 
let otherBool = false; 
console.log(otherBool); // => logs false

// Here is an example of using booleans
let isRaining = true;

if (isRaining){ // Checks to see if our variable isRaining is true
    console.log('Bring an umbrella!'); // if it is, logs this string
} else {
    console.log('Looks sunny!') // otherwise logs this
};

// In this example it would log 'Bring an umbrella' to the console.

// 4. Array //
// Here we assign our variable an array with our brackets, filling it with various values, and seperating them with commas

let array = ['hello', 87, true, ['Nested']];
console.log(array); // => logs ['hello', 87, true, ['Nested']]

// Here we have an array that not only holds our previous types of data but also another array
// This is usually called a 'nested array'
// And like strings, we access specific elements the same way
console.log(array[0]); // => logs 'hello'

// 5. Object //
//  Here we assign our variable an array with our curly braces and filling it with key/value pairs

let object = {
    type: 'complex',
    mutable: true,
    pairs: 3
};
console.log(object); // => { type: 'complex', mutable: true, pairs: 3 }

// For example one key/value pair is "type: 'complex'", type is the key while 'complex' is our value.
// We can also access the values with what is called Dot notation and Bracket notation.

// Dot notation
console.log(object.type); // => logs 'complex'

// Bracket notation
console.log(object['type']); // => logs 'complex' also


// 6. Functions //
// We set up a function first by using our function keyword, our function name, paraenthesis that take in a parameter, andour code block.

function myFunc(str){
    console.log(str);
}

// In order to use our function we must call it

myFunc('Hello'); // => logs 'Hello'

// 7. Undefined //
// Here we can get undefined just by logging an unassigned variable.

let undefine; 
console.log(undefine); // => logs undefined


// #8 Null //
// Here we assign our variable the data type null

let oof = null;
console.log(oof); // => logs null


// #9 NaN // 
// Here we assign our variable the data type NaN

console.log(NaN === NaN); // => logs false

// #10 Infinity and -Infinity //
// Infinity represents a value that is greater than any other number in Javascript
// While -Infinity represents a value that is smaller than any other number.
console.log(5 / 0);       // => logs infinity
console.log(-10 / 0);     // => logs -infinity

// #11 Simple and Complex Data Types //
// A. Simple //

let num = 42;
num = 24; // A new value (24) is assigned to the variable `num`.

// B. Complex // 

let obj1 = { name: "John" };
let obj2 = obj1; // Both `obj1` and `obj2` reference the same object.
obj2.name = "Jane"; // Modifying `obj2` also modifies `obj1`.

console.log(obj1.name); // Output: "Jane"

// 12. Passing by Copy/Value and Passing by Refrence //
// A. Pass by Copy/Value //

function updateValue(value) {
    value = 42; // Modifying the copy inside the function
    console.log(value); // Output: 42
  }
  let numbers = 10;
  updateValue(numbers);
  console.log(numbers); // Output: 10 (original value is unchanged)
  
  // B. Pass by Refrence //

  function updateName(person) {
    person.name = "Jane"; // Modifying the object property
    console.log(person.name); // Output: "Jane"
  }
  
  let obj = { name: "John" };
  updateName(obj);
  console.log(obj.name); // Output: "Jane" (original object is modified)
  