'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 *  label: description of function
 * 
 * @param {parameters} parameter names: what kind of parameter it takes in
 * @returns {paramters} parameter names: what it should return
 * 
 * 
 */

// PLACE FUNCTION HERE

// module.exports.function_name = function+name;



/**
 *  identify: Takes in the input and outputs it without any change
 * 
 * @param {any values} value: Any data type
 * @returns {values unchanged} value: The same data type
 * 
 * 
 */

_.identity = (value) => value

module.exports.identity = identity;




/**
 *  typeOf: Takes in a value and returns whatever data type it is as a string
 * 
 * @param {any value} Value: any data type
 * @returns {string} 'string', 'number', 'array', 'boolean', 'object', 'undefined', 'function', 'null': a string reffereing to the data type
 *
 * 
 */

    function typeOf(value){
    if (typeof value === 'string'){
        return 'string'
    } else if (Array.isArray(value)){
        return 'array'
    } else if (typeof value === 'number'){
        return 'number'
    } else if (value === true || value === false){
        return 'boolean'
    } else if (value instanceof Object &&
        Object.getPrototypeOf(value) == Object.prototype){
            return 'object'
        } else if (value === undefined){
            return 'undefined'
        } else if(typeof value === 'function'){
            return 'function'
        } else if (value === null){
            return 'null'
        }
}

module.exports.typeOf = typeOf;




/**
 *  first: Loops over an array and if the conditions are met,
 *  returns a new array featuring the first numbers of items in the array
 * 
 * @param {array} array: the array to be iterated over
 * @param {number} number: The number of values to be returned
 * @returns {empty array} []: returned if an array is not given or a negative number
 * @returns {First Element in an array} array[0]: returned if number is not given or NaN
 * @returns {first <number> items of <array>} arr2: returns the first numbers of items in the array
 * 
 * 
 */

function first(array, number){
    if (!Array.isArray(array) || number < 0){
        return [];
    }
    if (typeof(number) !== 'number' || !number){
        return array[0]
    }
    if (number > array.length){
        return array
    }else{
        var arr2 = [];
        arr2 = array.slice(0, number)
        return arr2
    }
}

module.exports.first = first;




/**
 *  last: Iterates through the arrayand if the conditions are met,
 *  returns a new array featuring the numbers of items in the array starting from the last
 * 
 * @param {array} array: the array to be iterated over
 * @param {number} number: The number of values to be returned
 * @returns {empty array} []: returned if an array is not given or a negative number
 * @returns {last Element in an array} last.charAt(last.length-1): returned if number is not given or NaN
 * @returns {last <number> items of <array>} arr2: returns the numbers of items in the array from last to first
 * 
 * 
 */

function last(array, number){
    if (!Array.isArray(array) || number < 0){
        return [];
    }
    if (typeof(number) !== 'number' || !number){
        var last = array.toString();
        return last.charAt(last.length-1)
    }
    if (number > array.length){
        return array
    }else{
        var arr2 = [];
        arr2 = array.slice(array.length - number, array.length)
        return arr2
    }
}

module.exports.last = last;




/**
 *  indexOf: Loops over the array and on the first occurance of value, will return the current index
 *      Otherwise if the value is not in the array it should return -1
 * 
 * @param {array} array: going to be iterated over to check for value
 * @param {value} value: The value given to be found
 * @returns {missing value} -1: returns -1 if the value given doesn't exsist
 * @returns {index of <array>} i: Return the index of <array> that is the first occurrance of <value>
 * 
 */

function indexOf(array, value){
    for (var i = 0; i < array.length; i++){
        if (value === array[i]){
            return i
        }
    }
    return -1
}
module.exports.indexOf = indexOf;




/**
 *  contains: Iterates over the array and if the value is included in it, return true else false
 * 
 * @param {An array} array: the array to be iterated over
 * @param {a value} value: the value in which will be searched for
 * @param {boolean} true : false: boolean returned depending if the value was found
 * 
 */

    (array, value) => (array.includes(value)) ? true : false;

module.exports.contains = contains;




/**
 *  unique: Takes in an array, iterates over it, and returns a new array of elements from <array> with dupicates removed
 * 
 * @param {array} array: an array that more than likely has duplicates
 * @returns {a new array} uniqueArray: it returns a new array with any possible duplicates from the array argument
 * 
 * 
 */

function unique(array){
    var uniqueArray = [];
    for (var i = 0; i < array.length; i++){
        if (i === _.indexOf(array, array[i])){
            uniqueArray.push(array[i])
        }
    }
    return uniqueArray
}

module.exports.unique = unique;




/**
 *  filter: loops through an array then runs a function through each element to test if it is true, if so it is pushed into a new array
 *      then once it is done looping, it will return the new arary
 * 
 * @param {an array} array: the given array to be iterated through
 * @param {a function} func: a function to test if the given array, it's element, and index are true
 * @returns {a new array} newArray: returns a new array for any elements that returned true after being put through the func
 * 
 * 
 */

function filter(array, func){
    var newArray = [];
    for (var i = 0; i < array.length; i++){
        func(array[i], i, array);
        if (func(array[i], i, array)){
            newArray.push(array[i]);
        }
    }
    return newArray
}

module.exports.filter = filter;




/**
 *  reject: calls function> for each element in <array> passing the arguments:     
 *      the element, it's index, <array> and returns a new array in which the function returned false
 * 
 * @param {array} array: the array given to be iterated through
 * @param {function} func: function to test if the given array, it's element, and index are false
 * @returns {array} rejectArray: returns a new array for any elements that returned false after being put through the func
 * 
 * 
 */

function rejct(array, func){
    var rejectArray = [];
    for (var i = 0; i < array.length; i++){
        func(array[i], i, array)
        if (!func(array[i], i, array)){
            rejectArray.push(array[i]);
        }
    }
    return rejectArray
}

module.exports.reject = reject;




/**
 *  partition: takes in an array and runs a function to determine if the elements in the array are truthy/falsey and sorts them based on that answer
 * 
 * @param {array} array: the array it iterates through
 * @param {function} func: determines if the element/index/<array> is truthy or falsey
 * @returns {array} newArray: what it should return a nested array that has array[0] as values
 *  that the function has determined as 'truthy' and array[2] for ones that are 'falsey'
 * 
 * 
 */

function partition(array, func){
    var newArray = [[], []];
    for (var i = 0; i < array.length; i++){
        func(array[i], i, array);
        if (func(array[i], i, array)){
            newArray[0].push(array[i]);
        }else if (!func(array[i], i, array)){
            newArray[1].push(array[i])
        }
    }
    return newArray
}

module.exports.partition = partition;




/**
 *  map: calls a function for each element in the collection(be it an array or an object)
 *  then saves the new return value of each call to the new array and returns it
 * 
 * @param {function} func: mutates the array 
 * @param {an array or an object} collection: is what is iterated through
 * @returns {array} funcArray: the new mutated array
 * 
 * 
 */

function map(collection, func){
    var funcArray = [];
    if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            funcArray.push(func(collection[i], i, collection))

        }
    } else {
        var keys = Object.keys(collection);
        var values = Object.values(collection);
        for (var key in collection){
            funcArray.push(func(collection[key], key, collection))
        }
    }
    return funcArray
}

module.exports.map = map;




/**
 *  pluck:  using .map it iterates through the nested object and checks if the given property matches and of the keys
 *      and returns and array filled with the values
 *  
 * @param {array} array: an array with a nested object that is iterated through
 * @param {a key's value within a obj} property: a given value to be tested to match a key
 * @returns {array} result: Return an array containing the value of <property> for every element in <array>
 * 
 * 
 */

function pluck(array, property){
    var result = [];
     _.map(array, (func) => {
        var keys = Object.keys(func);
        var value = Object.values(func);
        for (var i = 0; i < keys.length; i++){
            if (keys[i] === property){
                result.push(value[i]);
            }
        }
     });
     return result
}

module.exports.pluck = pluck;




/**
 *  every: takes in an object or an array and runs it through a function to determine if the elements in it are completely true or false,
 *          then returns true/false depending on the answer
 * 
 * @param {an array or object} collection: the object or array that is iterated over
 * @param {function} func: testes wheither or not the collection is truthy or not
 * @returns {boolean} true/false: returns true if the collection is completely truthy and false otherwise if any part is considered false
 * 
 * 
 */

function every(collection, func){
    if (typeof func !== 'function'){
        for (let j = 0; j < collection.length; j++){
            if (!collection[j]){
                return false
            }
        }
        return true
    }
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            func(collection[i], i, collection)
            if (!func(collection[i], i, collection)){
                return false
            }
        }
    }else {
        var keys = Object.keys(collection);
        var values = Object.values(collection);
        for (var key in collection){
            func(collection[key], key, collection)
            if (!func(collection[key], key, collection)){
                return false
            }
        }
    }
    return true

}
module.exports.every = every;




/**
 *  some: takes in an object or an array and runs it through a function to determine if any elements are truthy or if all of it are false,
 *          then returns true/false depending on the answer
 * 
 * @param {an array or object} collection: the object or array that is iterated over
 * @param {function} func: testes wheither or not the collection is truthy or not
 * @returns {boolean} true/false: returns true if the collection is truthy at any point and false otherwise if every part is considered false
 * 
 * 
 */

function(collection, func){
    if (typeof func !== 'function'){
        for (let j = 0; j < collection.length; j++){
            if (!collection[j]){
                return false
            }
        }
        return true
    }
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            func(collection[i], i, collection)
            if (func(collection[i], i, collection)){
                return true
            }
        }
    }else if(!Array.isArray(collection)){
        var keys = Object.keys(collection);
        var values = Object.values(collection);
        for (var key in collection){
            func(collection[key], key, collection)
            if (func(collection[key], key, collection)){
                return true
            }
        }
    }
    else 
    if(collection === true){
        return true
    }
    return false
}

module.exports.some = some;




/**
 *  reduce: takes in an array, function, and seed. Calls the function for the arguments(seed, element, index, and array), 
 *      then when done looping over every element, returns the result
 * 
 * @param {an array} array: the array iterated over
 * @param {a function} func: the function which will be applied to the arguments (seed, element, index, and array)
 * @param {seed} seed: acts as a starting index for result
 * @returns {a value} result: the value after the loop is finished
 * 
 */

function reduce(array, func, seed){
    let result;
    // determine if seed was not passed in
    if (seed === undefined){
        // use the first element of the collection as seed value
        result = array[0];
        for (let i = 1; i < array.length; i++){
            // reassign result to func invocation
            result = func(result, array[i], i, array);
            //.             ?      item   index  collection
        }
    }else {
        result = seed;
        for (let i = 0; i < array.length; i++){
            result = func(result, array[i], i, array)
        }
    }
    return result;
}

module.exports.reduce = reduce;




/**
 *  extend: copies the properties of any objects after the first paramter and applies them to the first object parameter
 * 
 * @param {object 1} obj1: an object in which the copies of all the other parameter objects will be applied to
 * @param {any number of objects} ...obj: any amount of objects that will be copied and applied to the first parameter object
 * @returns {an object} obj1: returns the new mutated object parameter
 * 
 * 
 */

extend = (obj1, ...obj) => Object.assign(obj1, ...obj)

module.exports.extend = extend;




