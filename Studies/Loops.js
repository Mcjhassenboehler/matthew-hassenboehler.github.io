/**
 *  LOOPS:
 *
 *    0. Loops allow you to repeatedly execute a block of code based on specific conditions.
 *       They are essential for automating repetitive tasks, iterating over arrays or collections, and controlling program flow.
 *       Using loops we can loop through objects and arrays as well.
 *       
 *    1. While, For, and For-in
 *      A. For
 *      The for loop is commonly used when you know the number of iterations beforehand.
 *      It consists of three parts: initialization, condition, and increment/decrement.
 *      The loop executes the code block as long as the condition is true, and the increment/decrement statement updates the loop variable.
 *      B. While
 *      The while loop is used when the number of iterations is not known beforehand and depends on a specific condition.
 *      It executes the code block as long as the condition is true.
 *      C. For-in
 *      It allows you to loop through the enumerable properties of an object, including its own properties and properties inherited from its prototype chain. 
 *       
 */


// 1. While, For, and For-in loops/

// A. For loops //
// In for loops we have a variable that is assigned a starting point, a specified ending point, and an incrementer
// Here we are going to start from 0 and count upwards

for (let i = 0; i < 10; i++){ // 0 is our starting point, i being greater than or equal to 10 stops it, and i increases by 1 on each iteration 
    console.log(i); // => 0, 1, 2... and so on untl it reaches 9
}

// We can also do the reverse and count downwards.

for (let i = 10; i >= 0; i--){ // 10 is our starting point, i being less than or equal to 0 stops it, and i decreases by 1 on each iteration 
    console.log(i); // => 10, 9, 8... and so on untl it reaches 0
}

// B. While loops //
// The syntax for a while loop is as follows;

while(condition){
    // code block
}

// The condition is an expression that is evaluated before each iteration of the loop.

let x = 0;          // we set x to equal 0
while (x < 10) {   // as long as x is less than 10, our loop will continue
  console.log(x);  // every iteration of the loop will log what x is currently assigned to
  x++;            // Using the increment operator every iteration will add 1 to x 
}

// While x is less that 10, what x is currently assigned to is logged and then it is incremented by 1
// => 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// C. For-in loops //
// // The syntax for a for-in loop is as follows;

for (variable in object) {
    // Code to execute in each iteration
  }

  // The variable represents the current property name (key) during each iteration of the loop.
  // The object is the object over which you want to iterate its properties.
  // Here is a more realistic example;

  const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
  };
  
  for (let key in person) {
    console.log(key + ': ' + person[key]);
  }

  // In For-in loops the variable inside the code block refers to the key on the current iteration and person(object)[key] refers to the value.
  // So this for-in loop iterates over every key/value pair and then logs it to the console.



// Looping over Arrays //
// Looping over an array only requires a for loop syntax and we can loop forwards and backwards.
// To loop over an array in the forward direction, you can use a traditional for loop
// The traditional for loop allows you to iterate over the array using an index variable, starting from 0 and incrementing until the length of the array is reached.

const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) { // array.length tells our loop to loop 5 times because that is the length of the array
  console.log(array[i]);                // logs whatever the current element our index(i) is on, so 1, 2, 3, 4, 5
}

// To loop over an array in the backward direction, you can use a traditional for loop again
// In this scenario we will set our starting point on the last element index, our stopping point will be >= 0, and we will use the decrement operator.

const array2 = [1, 2, 3, 4, 5];
for (let i = array2.length - 1; i >= 0; i--) { // array.length -1 is accessing whatever the last spot's index is, in this case is 5.
  console.log(array2[i]);                     // => 5, 4, 3, 2, 1
}

