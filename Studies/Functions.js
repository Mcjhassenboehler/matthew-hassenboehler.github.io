/**
 *  FUNCTIONS:
 * 
 *  0. Functions in JavaScript are reusable blocks of code that can be invoked or called to perform a specific task.
 *     They help in organizing code, promoting reusability, and improving code readability. 
 *     Functions can have parameters, which act as placeholders for values to be passed in when the function is called. 
 *     They can also optionally return a value using the return statement. 
 *     Functions can access variables in their own scope as well as in higher-level or global scopes, but variables defined within a function are not accessible outside unless explicitly returned or made available.
 * 
 *  1. Functions have two phases, Function Declaration/Definition and Function Invocation/Call.
 *     A. Function Declaration
 *        In this phase, we define the function and specify its code block. It involves providing the function's name, parameters (optional), and the statements or actions to be executed when the function is called. 
 *        This is where the function is created and its behavior is defined, but it is not executed yet.
 *     B. Function Invocation
 *        In this phase, we execute (or call) the function to run the code inside its code block.
 *        It involves providing the arguments (values) to the function (if it expects any) and triggering the execution of the function's code.
 *        Other terms for executing a function include invoking a function or calling a function.
 * 
 *  2. Parameters and Arguments.
 *      The difference between a function's parameters and arguments passed to a function are as follows;
 *      Parameters are placeholders defined in the function declaration. They act as variables that represent the values to be passed into the function when it is called.     
 *      Parameters are specified within the parentheses of the function declaration.
 *      Arguments are the actual values passed into the function when it is called. They correspond to the parameters defined in the function declaration. 
 *      Arguments are provided within the parentheses at the time of function invocation.
 * 
 *  3. Named Functions.
 *      A named function is one that is considred a Function Declaration but after the function keyword has a 'name' in which you can reference.
 * 
 *  4. Assigning a function to a variable.
 *      Functions can also be assigned to variables when they are initialized. This is also refered to as a Function Expression.
 * 
 *  5. Function Inputs and Outputs.
 *      Inputs to a function are specified by defining parameters within the function declaration. Parameters act as placeholders for the values that will be passed into the function when it is called.
 *      Functions can optionally return a single value using the return statement. The value returned by the function can be used by the caller or assigned to a variable.
 * 
 *  6. Scope.
 *      Functions have access to variables in their own scope, as well as variables in higher-level or global scopes.
 *      Variables defined within a function are scoped locally and are not accessible outside the function unless explicitly returned or made available in some other way.
 *      However, variables defined outside a function (in parent or global scopes) can be accessed and modified within the function.
 * 
 *  7. Closures.
 *      Functions in JavaScript form closures around the data they enclose. A closure is a combination of a function and the lexical environment within which that function was declared.
 *      When a function returns an object (or any value) that is stored in memory or referenced by other parts of the code, the closure associated with that function remains intact.
 *      This means that the data (variables) within the closure are preserved, and the function retains access to those variables, even if the function has finished executing.
 *      
 * 
 */

// 1. Function Declaration and Invocation //
// For a function declaration we start with the function keyword, a name(if no name is put then it is considered an anonymous function), paraenthesis for our possible parameters, and the curly braces for our code block.

// function keyword   name
        function exampleFunction (/*parameters*/){
        // code block goes here
        }

// To call/invoke our function we simply type whatever we have as our name

function exampleFunction2 (str){
    console.log(str);
}

exampleFunction2('Hello World'); // => 'Hello World'

// 2. Parameters and Arguments //
// We add our parameters in our function declration/expression within the parenthesis
// Our arguments are entered when our function is being called/invoked

function exampleFunction3(x, y){ // x and y are parameters
    console.log(x + y); // => 9
}

exampleFunction3(4, 5); // 4 and 5 are our arguments

// 4. Assigning Functions to a variable //
// We still write our function the same way when assigning it to a variable, the only difference is when we call it.
// When we call it we use the variable's name

let varFunc = function(x, y){
    console.log(x + y);
}

varFunc(4, 5); // => 9

// 5. Inputs and Outputs //
// As we've gone over already, our parameters are our inputs
// Our output however is usually specified by the keyword 'return'

function newFunc (x, y){
    return x + y        // => 9
}

// 6. Scope //
// As we know there are different scopes in Javascript.
// Anything can access the global scope

let here = "Hello, I'm on the Global Scope!"

function globeAcc (){
    console.log(here);
}

globeAcc();
console.log(here);
// Both log "Hello, I'm on the Global Scope!"

// There is also Local Scope which can only be accessed with itself or it's 'children'

let here2 = "Hello!"

function local (){
    let here3 = "Hi from the local scope!"
    console.log(here3); // => "Hi from the local scope!"
}

console.log(here3); // => ReferenceError: here3 is not defined, becuase the global scope cannot access local scope and let/const are block scope


// 7. Closures //
// In this example, we have an outer function called outerFunction that defines a variable message and an inner function called innerFunction.
// The inner function has access to the message variable defined in the outer function.

function outerFunction() {
    const message = 'Hello World!';
  
    function innerFunction() {
      console.log(message);
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction();
  closure(); // => Hello World!
  
  // When we invoke outerFunction, it returns the innerFunction. We assign the returned function to the variable closure.
  // Later, when we call closure(), it still has access to the message variable defined in its outer scope, even though the outerFunction has finished executing.
  // As a result, when we invoke closure(), it logs the value of message ('Hello') to the console.
  