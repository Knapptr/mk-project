import createComment from "./comment";

describe("Comment read", () => {
  let comment: any;

  beforeEach(() => {
    comment = createComment("Test comment");
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
