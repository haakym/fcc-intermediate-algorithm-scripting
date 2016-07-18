// https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range

// refactored into one method

function sumAll(arr) {
  if(arr[0] === arr[1]) 
    return arguments[1] + Math.min.apply(null, arr) - 1;
  
  return sumAll(
    [Math.min.apply(null, arr) + 1, Math.max.apply(null, arr)], 
    arguments[1] ? (arguments[1] + Math.min.apply(null, arr)) : (Math.min.apply(null, arr) + 1)
  );
  
}

// original

'esversion:6';

function range(from, to, arr) {
    if (from > to) return arr;

    return range(from + 1, to, arr.concat(from));
}

function sumAll(arr) {
    return range(Math.min(...arr), Math.max(...arr), [])
        .reduce(function(previousValue, currentValue) {
            return previousValue + currentValue;
        });
}
