import createUser from "./user";

describe("Creation", () => {
    it("trims whitespace from username", () => {
        const username = "  aValidUserNameButWithWhitespace  "
        const validpassword = "aValidPassword"
        let user = createUser(username, validpassword);

        expect(user.username).toBe("aValidUserNameButWithWhitespace");

    })

    it("trims whitespace in middle of username", () => {
        const validUsername = "a\nValidUsernameWithMiddleWhitespace";
        const validpassword = "aValidPassword"

        let user = createUser(validUsername, validpassword);

        expect(user.username).toBe("aValidUsernameWithMiddleWhitespace");

    })

    it("checks password: correct", () => {
        const username = "aValidUsername"
        const validpassword = "aValidPassword"

        let user = createUser(username, validpassword)

        expect(user.validate(validpassword)).toBe(true);
    })

    it("checks password: incorrect", () => {
        const username = "aValidUsername"
        const validpassword = "aValidPassword"
        const wrongPassword = "aNonMatchingPassword"

        let user = createUser(username, validpassword)

        expect(user.validate(wrongPassword)).toBe(false);
    })

})
