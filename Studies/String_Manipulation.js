/**
 *  STRING MANIPULATION:
 * 
 *  0. String manipulation refers to the process of modifying, combining, extracting, or transforming strings in a programming language.
 *     It is a fundamental task as strings are a common data type used to represent text and characters.
 *     String manipulation allows you to perform various operations on strings to achieve specific outcomes.   
 * 
 *  1. String Manipulation through Operators
 *     One way to manipulate strings is through the use of operators.
 *     Operators like + can be used to concatenate two or more strings together, combining them into a single string.
 * 
 *  2. String Manipulation through Methods
 *     String manipulation using string methods involves utilizing the built-in methods provided by JavaScript to perform operations on strings.
 *     These methods allow for more sophisticated string manipulation with a wide range of functionalities.
 * 
 */

// 1. String Manipulation through Operators //

// A. Cocatenation Operator //
// The concatenation operator (+) is used to concatenate two or more strings together.

console.log('Hello' + ' World!'); // => 'Hello World!'

// B. Assignment Operator //
// The assignment operator (+=) is used to concatenate a string to an existing string variable.

let assignOp = 'Hello';
console.log(assignOp += ' World'); // => 'Hello World'

// C. Access Operator //
// The access operator ([]) is used to access individual characters within a string based on their index.

console.log('Hello'[0]); // => returns 'H'

// 2. String Manipulation through Methods //

// A. Concat //
// Expressed as string1.concat(string2); 
// Used to concatenate two or more strings and returns a new concatenated string.

let string1 = 'Hello';
let string2 = ' World';

console.log(string1.concat(string2)); // => 'Hello World'

// B. Slice //
// Expressed as string.slice(_, _);
// Extracts a portion of a string based on the specified start and end indices and returns a new substring.
// The method takes 2 parameters: start position, and end position.

let slice = ('Hello World');

console.log(slice.slice(1, 5)); // => 'ello'

// C. toUpperCase //
// Expressed as string.toUpperCase();
// Turns the string into all upper case

let newWord = 'hello';

let upper = newWord.toUpperCase();

console.log(upper); // => 'HELLO'

// D. toLowerCase //
// Expressed as string.toLowerCase();
// Turns the string into all lower case

let newWord2 = 'HELLO';

let lower = newWord2.toLowerCase();

console.log(lower); // => 'hello'