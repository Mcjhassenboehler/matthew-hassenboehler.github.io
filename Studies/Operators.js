/**
 *  OPERATORS:
 *  
 *  0. Operators are symbols or keywords that perform various operations on values or variables in JavaScript. 
 *     They allow you to perform mathematical calculations, compare values, assign values, and more.
 *     The types of Operators we use are Assignment, Arithmetic, Comparison, Logical, Unary, and Ternary.
 * 
 *  1. Assignment Operators are used to assign values to variables.
 *     Also used to modify values based on arithmetic calculations.
 * 
 *  2. Arithmetic Operators are used for performing mathematical calculations.
 *     Also used for finding remainers (Modulo) and adding increments.   
 * 
 *  3. Comparison Operators are used to compare values and return a boolean result.
 * 
 *  4. Logical Operators are used to combine or negate boolean values.
 * 
 *  5. Unary Operators act on a single operand to perform operations like type conversion, negation, or increment/decrement.
 * 
 *  6. Ternary Operator provides a shorthand for conditional expressions, allowing for a compact if-else statement in a single line.
 * 
 */

// 1. Assignment Operators //

// A. Simple Assignment //
// Expressed using the '=' character.
// It takes the value on the right side and assigns it to the variable on the left side.

let x = 20;
//    ^ is our simple asssignment operator

// B. Addition Assignment //
// Expressed using the'+=' character.
// Adds the value on the right side to the existing value of a variable and assigns the result back to the variable.

let addition = 5;
console.log(addition += 3); // => 8

// C. Subtration Assignment //
// Expressed using the '-=' character.
// Subtracts the value on the right side from the existing value of a variable and assigns the result back to the variable.

let subtration = 5;
console.log(subtration -= 3); // => 2

// D. Multiplication Assignment //
// Expressed using the '*=' character.
// Multiplies the value on the right side with the existing value of a variable and assigns the result back to the variable.

let multiply = 5;
console.log(multiply *= 3); // => 15

// E. Division Assignment //
// Expressed using the '/=' character.
// Divides the existing value of a variable by the value on the right side and assigns the result back to the variable.

let divide = 6;
console.log(divide /= 3); // => 2

// F. Modulo Assignment //
// Expressed using the '%=' character.
// Calculates the remainder of dividing the existing value of a variable by the value on the right side and assigns the result back to the variable.

let modulo = 10;
console.log(modulo %= 2); // => 1



// 2. Arithmetic Operators //

// A. Addition //
// Expressed using the '+' character.
// Used to add values.

console.log(4 + 5); // => logs 9

// A. Subtraction //
// Expressed using the '-' character.
// Used to subtract values.

console.log(6 - 1); // => logs 5

// B. Multiplication //
// Expressed using the '*' character.
// Used to multiply values.

console.log(4 * 5); // => logs 20

// C. Division //
// Expressed using the '/' character.
// Used to divide values.

console.log(20 / 5); // => logs 4

// D. Modulo //
// Expressed using the '%' character.
// Used to return the remainder of a division operation between two numbers.

console.log(10 % 3); // => logs 1

// E. Increment //
// Expressed using the '++' character.
// Used to increase the value of a variable by 1.

let increment = 4;
console.log(++increment); // => logs 5

// F. Decrement //
// Expressed using the '--' character.
// Used to decrease the value of a variable by 1.

let decrement = 4;
console.log(--decrement); // => logs 3


// 3. Comparison Operators //

// A. Equal to //
// Expressed using the '==' or '===' characters.
// Returns 'true' if equal and 'false' if not.
// The === operator performs strict equality comparison, which checks both the value and the data type.
// The == operator performs loose equality comparison, which allows type coercion.

console.log(5 == '5'); // => true

console.log(5 === '5'); // => false

// B. Not Equal to //
// Expressed using the '!=' or '!==' characters.
// Returns 'true' if not equal and 'false' they are.
// The !== operator performs strict inequality comparison, considering both value and data type.
// The != operator performs loose inequality comparison, allowing type coercion.

console.log(5 != 7); // => true
console.log(5 != '5'); // => false

console.log(5 !== 5); // => false
console.log(5 !== '5'); // => true

// C. Greater than //
// Expressed using the '>' character.
// Compares two values and returns true if the left value is greater than the right value, false otherwise.

console.log(7 > 5); // => true

// D. Less than //
// Expressed using the '<' character.
// Compares two values and returns true if the left value is less than the right value, false otherwise.

console.log(7 < 5); // => true

// E. Greater than or equal to //
// Expressed using the '>=' character.
// Compares two values and returns true if the left value is greater than the right value or equal to it, false otherwise.

console.log(7 >= 7); // => true

// F. Less than or equal to //
// Expressed using the '<=' character.
// Compares two values and returns true if the left value is less than the right value or equal to it, false otherwise.

console.log(7 <= 10); // => true

// 4. Logical Operators //

// A. And //
// Expressed using the '&&' characters.
// Returns true if both operands are true, and false otherwise.
// It performs short-circuit evaluation, meaning that if the left operand evaluates to false, the right operand is not evaluated.

if (1 === 1 && 1 == '1'){
    console.log(true);
} else {
    console.log(false)
}
// This statement will log true

// B. Or //
// Expressed using the '||' characters.
// Returns true if at least one of the operands is true, and false if both operands are false.
// Like And it also performs short-circuit evaluation, meaning that if the left operand evaluates to false, the right operand is not evaluated.

if (1 === 1 || 1 === '1'){
    console.log(true);
} else {
    console.log(false)
}
// This statement will log true since only one statement is required to be true.



// 5. Unary Operators //

// A. Not //
// Expressed using the '!' character.
// Sometimes refered to as 'Bang'.
// Reverses the logical state of its operand. If the operand is true, it returns false, and if the operand is false, it returns true.

console.log(!true); // => false

// B. typeof //
// Expressed as 'typeof'.
// Allows you to determine the data type of a given value or expression.
// Followed by an operand, which can be  avariable, a literal value, or even an expression.

console.log(typeof 'string'); // => string

// C. Unary Plus //
// Expressed as the '+' character.
// Attempts to convert its operand into a number.

let plus = '10';
console.log(+plus); // => 10 (number)

// D. Unary Minus //
// Expressed as the '-' character.
// Attempts to convert its operand into a negative number.

let minus = '10';
console.log(-plus); // => -10 (number)


// 6. Ternary Operator//

let age = 25;
let isAdult = age >= 18 ? "Yes" : "No";

console.log(isAdult); // => "Yes"