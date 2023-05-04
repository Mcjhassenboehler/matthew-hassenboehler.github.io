//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values //////////////////////////////////////// //13
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arrReturn = [];
    for(var key in object){
        arrReturn.push(object[key]);
    }
    return arrReturn
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////  //14
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var arrReturn = [];
    for(var key in object){
        arrReturn.push(key);
    }
    var objString = arrReturn.join(" ")
    return objString
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String ///////////////////////////////////// //15
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arrReturn = [];
    var stringBait = 'bait';
    for(var key in object){
        if(typeof object[key] === 'string'){
            arrReturn.push(object[key]);
        }
    }
    var objString = arrReturn.join(" ")
    return objString
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object ////////////////////////////////////// //16
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return 'array'
    } 
    else if (typeof collection === 'object' &&
    !Array.isArray(collection) &&
    collection !== null){
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var stringCap = string.charAt(0).toUpperCase() + string.slice(1);
    return stringCap
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var splitStr = string.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++){
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    for (var key in object){
        var target = object[key].charAt(0).toUpperCase() + object[key].substring(1);
        return "Welcome " + target + "!"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
        var arrObj = Object.values(object)
        var name = arrObj[0].charAt(0).toUpperCase() + arrObj[0].substring(1);
        var species = arrObj[1].charAt(0).toUpperCase() + arrObj[1].substring(1);
        return name + " is a " + species
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (!object.noises || object.noises.length === 0){
        return 'there are no noises'
    }
    return object.noises.join(' ');
  }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var arrString = string.split(" ")
    for (var i = 0; i < arrString.length; i++){
        if (arrString[i] === word){
            return true
        }
    }
  return false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
     object.friends.push(name)
     return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(!object.friends){
        return false
    }
    return object.friends.includes(name)
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
////////////////////////////////////////////////////////////////////// // butts

function nonFriends(name, array) {
    var nameList = [];
    var result = [];
    var current = null;
    for(var i = 0; i < array.length; i++){         
        if(name === array[i].name){
            current = array[i];
        }else{
            nameList.push(array[i].name);
        }
    }
    for(var i = 0; i < nameList.length; i++){
        if(current.friends.indexOf(nameList[i]) == -1){
            result.push(nameList[i]);
        }
    }
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
   object[key] = value;
   return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var key in object){
        if(array.includes(key)){
          delete object[key]
        }
      }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let uniqueChars = [...new Set(array)];
    return uniqueChars
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}