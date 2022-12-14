const capitalize = require("./capital");
test("capitalize()", () => {
  const testString = "hi it's Roy";
  expect(capitalize(testString)).toBe("Hi it's Roy");
});
