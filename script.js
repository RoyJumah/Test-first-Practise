function isValidStringTest(str) {
  if (typeof str !== "string") return false;
  if (str.length < 1 || str.length > 10) return false;
  return true;
}

function stringLengthTest(str) {
  if (!isValidStringTest(str)) return false;
  return str.length;
}
module.exports = stringLengthTest;
