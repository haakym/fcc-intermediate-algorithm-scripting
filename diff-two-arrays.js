// https://www.freecodecamp.com/challenges/diff-two-arrays

function diffArray(arr1, arr2) {
  return arr1.filter(function(val1) {
    return (arr2.indexOf(val1) == -1);
  }).concat(arr2.filter(function(val2) {
    return (arr1.indexOf(val2) == -1);
  }));
}
