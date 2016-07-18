// https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range

function sumAll(arr) {
  if(arr[0] === arr[1]) 
    return arguments[1] + Math.min.apply(null, arr) - 1;
  
  return sumAll(
    [Math.min.apply(null, arr) + 1, Math.max.apply(null, arr)], 
    arguments[1] ? (arguments[1] + Math.min.apply(null, arr)) : (Math.min.apply(null, arr) + 1)
  );
  
}
