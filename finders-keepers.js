// https://www.freecodecamp.com/challenges/finders-keepers

function findElement(arr, func) {
  return arr.filter(val => func(val))[0];
}
