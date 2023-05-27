/**
 *  CONTROL FLOW: 
 *  
 *  0. Control flow refers to the order in which the instructions or statements of a program are executed based on certain conditions or decision points.
 *     It determines the flow of execution within a program, allowing you to control the order of operations and make decisions based on specific conditions. 
 *     We use control flow mechanisims that are availible to use to create conditional statements and switch statements.
 *      
 * 
 */

// 1. If //
// the 'If' Conditional statements allow you to execute a block of code based on a condition.
// The block of code gets executed if the condition is true.
// Expressed using the reserved word 'if', a set of paranthesis, and curly braces.

if (2 + 2 === 4){
    console.log('This is true.') // => 'This is true'
}

// 2. Else-if //
//  Allows you to check multiple conditions and execute different blocks of code based on the conditions.
// It evaluates the conditions one by one until it finds a true condition.

let weather = 'Rainy';

if (weather === 'Sunny'){
    console.log('Sunny out!')
} else if (weather === 'Rainy'){
    console.log('Bring an umbrella!');
}
// This will log 'Bring an umbrella!'

// 3. Else //
// Extends the if statement by providing an alternative block of code to execute if the condition is false.
// It evaluates a condition and executes the code block within the if statement if the condition is true. 
// If the condition is false, the code block within the else statement is executed.

let newWeather = 'Fog';

if (newWeather === 'Sunny'){
    console.log('Sunny out!')
} else if (newWeather === 'Rainy'){
    console.log('Bring an umbrella!');
} else {
    console.log('Be prepared for anything');
}
// => 'Be prepared for anything'

// 4. Switch //
// The switch statement allows you to perform different actions based on different conditions.
// It evaluates an expression and matches its value to specific case labels. If a match is found, the corresponding block of code is executed.
// Uses the 'break' statement to exit the switch statement once the corresponding case is matched and executed.
// If nothing matches, it will return with it's 'default' statement.

let weather2 = "sunny";

switch (weather2) {
  case "sunny":
    console.log("It's a beautiful day!");
    break;
  case "rainy":
    console.log("Don't forget your umbrella!");
    break;
  case "cloudy":
    console.log("The sky is covered in clouds.");
    break;
  case "snowy":
    console.log("Enjoy the winter wonderland!");
    break;
  default:
    console.log("Unknown weather condition.");
}

// => "It's a beautiful day!"


