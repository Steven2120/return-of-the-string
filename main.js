/*******************
 * YOUR CODE HERE! *
 *******************/
function yell(str) {
  return str + "!";
}

function getFirstCharacter(str) {
  return str[0];
}

function getLastCharacter(str) {
  return str.charAt(str.length -1);
}

function getOneCharacter(str, num) {
  return str.charAt(num);
}

function getTwoCharacters(str, num1, num2) {
  return str.charAt(num1) + str.charAt(num2);
}

function makeCapitalized(str) {
  return str.toUpperCase();
}

function yellLouder(str) {
  return str.toUpperCase() + "!!!";
}

function getInitials(str) {
  return str[0].toUpperCase() + "." + str.charAt(str.lastIndexOf(" ") + 1).toUpperCase() + ".";
}

/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
