const stringLengthTest = require("./script");

test("stringLengthTest returns the length of a valid string", () => {
  expect(stringLengthTest("hello")).toBe(5);
  expect(stringLengthTest("goodbye")).toBe(7);
});

test("stringLengthTest returns false for an invalid string", () => {
  expect(stringLengthTest("")).toBe(false);
  expect(stringLengthTest("hello world")).toBe(false);
  expect(stringLengthTest(123)).toBe(false);
});
