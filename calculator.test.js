const Calculator = require("./calculator");

describe("add()", () => {
  test("adds two numbers together", () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("adds a negative number", () => {
    const calculator = new Calculator();
    expect(calculator.add(1, -2)).toBe(-1);
  });

  test("adds two negative numbers", () => {
    const calculator = new Calculator();
    expect(calculator.add(-1, -2)).toBe(-3);
  });
});

describe("subtract()", () => {
  test("subtracts two numbers", () => {
    const calculator = new Calculator();
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  test("subtracts a negative number", () => {
    const calculator = new Calculator();
    expect(calculator.subtract(1, -2)).toBe(3);
  });

  test("subtracts two negative numbers", () => {
    const calculator = new Calculator();
    expect(calculator.subtract(-1, -2)).toBe(1);
  });
});

describe("multiply()", () => {
  test("multiply two numbers", () => {
    const calculator = new Calculator();
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test("multiply a negative number", () => {
    const calculator = new Calculator();
    expect(calculator.multiply(1, -2)).toBe(-2);
  });

  test("multiply two negative numbers", () => {
    const calculator = new Calculator();
    expect(calculator.multiply(-1, -2)).toBe(2);
  });
});

describe("divide()", () => {
  test("divide two numbers", () => {
    const calculator = new Calculator();
    expect(calculator.divide(1, 2)).toBe(0.5);
  });

  test("divide a negative number", () => {
    const calculator = new Calculator();
    expect(calculator.divide(1, -2)).toBe(-0.5);
  });

  test("divide two negative numbers", () => {
    const calculator = new Calculator();
    expect(calculator.divide(-1, -2)).toBe(0.5);
  });
});
