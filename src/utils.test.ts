import { validate, generateID } from "./utils";

describe("validate strings", () => {
  it("throws on empty string", () => {
    let theEmptyString = "";
    let errorMessage = "The string may not be empty";

    expect(() => {
      validate.string.isNotEmpty(theEmptyString, errorMessage);
    }).toThrow(errorMessage);
  });
});

describe("Generate ID", () => {
  it("creates a string", () => {
    const id = generateID();

    expect(typeof id === "string").toBe(true);
  });
});
