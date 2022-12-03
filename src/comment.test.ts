import createComment from "./comment";

describe("Comment read status", () => {
  let comment: any;

  beforeEach(() => {
    comment = createComment();
  });

  it("Inits as unread", () => {
    expect(comment.getReadStatus()).toBe(false);
  });

  it("Marks unread comment as read", () => {
    comment.toggleRead();

    expect(comment.getReadStatus()).toBe(true);
  });

  it("Marks read comment as unread", () => {
    comment.toggleRead();
    comment.toggleRead();

    expect(comment.getReadStatus()).toBe(false);
  });
});

describe("Comment text", () => {
  let comment: any;

  beforeEach(() => {
    comment = createComment();
  });

  it("Sets the body text according to input", () => {
    const test_input = "This is a test input for comments.";

    comment.setBodyText(test_input);

    expect(comment.body === test_input).toBe(true);
  });
});

describe("Comment replies", () => {
  let comment: any;

  beforeEach(() => {
    comment = createComment();
  });

  it("Adds a reply", () => {
    const text = "Testing text to try the trivial tests";
    comment.addReply(text);

    expect(comment.replies.length === 1).toBe(true);
  });

  it("Adds replies in chronological order", async () => {
    const text1 = "Testing string 1";
    const text2 = "Testing string deux";

    comment.addReply(text1);
    comment.addReply(text2);

    expect(comment.replies[1].body === text2).toBe(true);
  });
});
