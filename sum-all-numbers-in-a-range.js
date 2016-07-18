// https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range

function sumAll(arr) {
  // console.log(arguments);
  
  if(arr[0] === arr[1]) {
    // console.log(arguments[1] + Math.min.apply(null, arr)  - 1);
    return arguments[1] + Math.min.apply(null, arr) - 1;
  }
  
  sumAll(
    [Math.min.apply(null, arr) + 1, Math.max.apply(null, arr)], 
    arguments[1] ? (arguments[1] + Math.min.apply(null, arr)) : (Math.min.apply(null, arr) + 1)
  );
  
}
