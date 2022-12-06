import utils from "./utils";

describe("validate strings", () => {
    it("tests for empty string", () => {
        let theEmptyString = "";

        expect(utils.validate.string.isNotEmpty(theEmptyString)).toBe(false)
    })

})
