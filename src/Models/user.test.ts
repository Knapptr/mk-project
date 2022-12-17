import { expect } from "chai";
import createUser from "./user";

describe("Creation", () => {
    it("trims whitespace from username", () => {
        const username = "  aValidUserNameButWithWhitespace  "
        const validpassword = "aValidPassword"
        let user = createUser(username, validpassword);

        expect(user.username).to.equal("aValidUserNameButWithWhitespace");

    })

    it("trims whitespace in middle of username", () => {
        const validUsername = "a\nValidUsernameWithMiddleWhitespace";
        const validpassword = "aValidPassword"

        let user = createUser(validUsername, validpassword);

        expect(user.username).to.equal("aValidUsernameWithMiddleWhitespace");

    })

    it("checks password: correct", () => {
        const username = "aValidUsername"
        const validpassword = "aValidPassword"

        let user = createUser(username, validpassword)

        expect(user.validate(validpassword)).to.equal(true);
    })

    it("checks password: incorrect", () => {
        const username = "aValidUsername"
        const validpassword = "aValidPassword"
        const wrongPassword = "aNonMatchingPassword"

        let user = createUser(username, validpassword)

        expect(user.validate(wrongPassword)).to.equal(false);
    })

})
