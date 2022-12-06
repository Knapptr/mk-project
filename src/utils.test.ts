import { validate } from "./utils";

describe("validate strings", () => {
    it("throws on empty string", () => {
        let theEmptyString = "";
        let errorMessage = "The string may not be empty";

        expect(() => {
            validate.string.isNotEmpty(theEmptyString, errorMessage);
        }).toThrow(errorMessage)
    })

})
