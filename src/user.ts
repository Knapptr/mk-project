interface IUser {
    username: string;
    validate(password: string): boolean
}

function createUser(username: string, password: string): IUser {
    let _username = validateUsername(sanitizeUsername(username));
    let _password = password;

    return {
        get username() {
            return _username
        },
        validate(password: string): boolean {
            return password === _password;
        }
    }
}


function sanitizeUsername(username: string) {
    // the regex here doesn't affect white space at the beginning or end of
    // a string. Not sure why, so the trim() method is necessary here
    return username.trim().replace(/\s+/, "");
}

function validateUsername(username: string) {
    let words = username.split(" ")
    if (words.length > 1) { throw new Error("Invalid username") }
    return username;
}
export default createUser;
