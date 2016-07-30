// https://www.freecodecamp.com/challenges/drop-it

function dropElements(arr, func) {  
  return func(arr[0]) ?
    arr :
    arr.length ? dropElements(arr.splice(1, arr.length), func) : [];
}
