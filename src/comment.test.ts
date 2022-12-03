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

    expect(comment.body === test_input);
  });
});
