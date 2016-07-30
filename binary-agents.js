// https://www.freecodecamp.com/challenges/binary-agents

function binaryAgent(str) {
  return str.split(" ")
    .map(val => {
      return String.fromCharCode(binaryToDecimal(val));
    })
    .join("");
}

function binaryToDecimal(binary) {
  return binary.split("")
    .reverse()
    .map((column, exponent) => {
      return column * (Math.pow(2, exponent));
    })
    .reduce((a, b) => a + b);
}
