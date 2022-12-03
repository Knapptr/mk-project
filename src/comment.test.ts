import createComment from "./comment";

describe("Comment read", () => {
  let comment: any;

  beforeEach(() => {
    comment = createComment("Test comment");
  });

  it("Marks comment as read", () => {
    comment.toggleRead();

    expect(comment.getReadStatus()).toBe(true);
  });
});
