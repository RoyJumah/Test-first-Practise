const reverseString = require("./reverse");

test("reverseString reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("goodbye")).toBe("eybdoog");
});
