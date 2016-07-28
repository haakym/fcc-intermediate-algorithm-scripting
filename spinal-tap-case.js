// https://www.freecodecamp.com/challenges/spinal-tap-case

function spinalCase(str) {
  return str.replace(/\s/g, "-")
    .replace(/_/g, "-")
    .replace(/[a-z](?=[A-Z])/g, "$&-")
    .toLowerCase();
}
