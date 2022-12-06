import { validate } from "./utils";

describe("validate strings", () => {
    it("tests for empty string", () => {
        let theEmptyString = "";

        expect(validate.string.isNotEmpty(theEmptyString)).toBe(false)
    })

})
