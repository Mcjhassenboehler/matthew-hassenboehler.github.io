/**
 *  VARIABLES:
 * 
 * 
 * 0. Variables in JavaScript are used to store and manipulate data, acting as containers that hold values such as numbers, strings, objects, or functions.
 * Variables are dynamically typed, meaning their types can change during runtime, allowing flexibility in working with different types of data.
 * They must be assigned a value before they can be used. If a variable is declared but not assigned a value, it will have the value undefined until assigned a different value.
 * We can also reassign certain variables depending on their declaration type.
 * 
 * 1. Variables are declared using the var, let, or const keywords, indicating different scoping and mutability rules.
 * 
 *
 * 2. JavaScript hoisting is a mechanism where variable and function declarations are moved to the top of their respective scopes during the compilation phase, allowing them to be accessed before they are actually defined in the code.
 * 
 */
 

// 1. Declaration //
// Declaration is the point in which we are stating the name of our variable, it currently holds no value
var variableDeclare;
console.log(variableDeclare); // => undefined

// 2. Initialization //
// This is where we assign a value to a variable
variableDeclare = 'declared';
console.log(variableDeclare); // => declared

// 3. Re-assign //
// We can change or update the value of a previously assigned variable
variableDeclare = 'reassigned';
console.log(variableDeclare); // => reassigned 

// 4. var, let, and const //
// These are keywords that we use to declare variables, each one has it's own rules and properties
// var is function-scoped and allows reassignment
var var1 = 1;
console.log(var1); // => 1
var1 = 2;
console.log(var1); // => 2

function v(){
    var var3 = 0;
    return var3
}
console.log(var3); // => 0

// let is block-scoped and allows reassignment
let let1 = 1;
console.log(let1); // => 1
let1 = 2;
console.log(let1); // => 2

function l(){
    let let3 = 0;
    return let3
}
console.log(let3); // => ReferenceError: let3 is not defined

// constis block-scoped and does not allow reassignment, making it a constant value.
const const1 = 1;
console.log(const1); // => 1
const1 = 2;
console.log(const1); // => TypeError: Assignment to constant variable.

function l(){
    const const3 = 0;
    return const3
}
console.log(const3); // => ReferenceError: const3 is not defined

// 5. Hoisting //
// Hoisting is JavaScript's default behavior of moving declarations to the top.
x = 5;
var x
/**
 *     After Hoisting would read
 * 
 *  var x
 *  x = 5
 *
 */