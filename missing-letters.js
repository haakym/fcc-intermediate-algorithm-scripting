// https://www.freecodecamp.com/challenges/missing-letters
// hacky solution, needs refactoring

function fearNotLetter(str) {
  return str.split("")
    .map((val) => val.charCodeAt())
    .filter(function (val, index, array) {
      return index !== (array.length - 1) ?
        (val + 1) !== array[index+1] :
        false;
    })
    .map((val) => String.fromCharCode(val+1))[0];
}
