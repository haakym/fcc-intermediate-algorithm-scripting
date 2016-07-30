// https://www.freecodecamp.com/challenges/steamroller

function steamrollArray(arr) {
  return arr.every(val => !Array.isArray(val)) ?
    arr :
    steamrollArray(
      arr.reduce(function(a, b) {
          return a.concat(b);
      }, [])
    );
}
