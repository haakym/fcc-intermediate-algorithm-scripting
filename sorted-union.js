// https://www.freecodecamp.com/challenges/sorted-union

function uniteUnique(arr) {
  return Array.from(arguments)
    .reduce((a, b) => a.concat(b))
    .filter((item, key, arr) => arr.indexOf(item) == key);
}
