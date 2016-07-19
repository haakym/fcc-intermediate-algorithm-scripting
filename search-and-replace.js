// https://www.freecodecamp.com/challenges/search-and-replace

function myReplace(str, before, after) {
  return str.replace(
    new RegExp(before),
    (new RegExp(before).exec(str)[0][0] === new RegExp(before).exec(str)[0][0].toUpperCase()) ?
    after.split("")[0].toUpperCase() + after.slice(1, after.length):
    after
  );
}
