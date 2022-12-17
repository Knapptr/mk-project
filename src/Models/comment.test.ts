import { expect } from "chai";
import createComment from "./comment";

describe("Comment read status", () => {
  let comment: any;

  beforeEach(() => {
    const text = "Testing text to try the trivial tests";
    comment = createComment(text);
  });

  it("Inits as unread", () => {
    expect(comment.getReadStatus()).to.equal(false);
  });

  it("Marks unread comment as read", () => {
    comment.toggleRead();

    expect(comment.getReadStatus()).to.equal(true);
  });

  it("Marks read comment as unread", () => {
    comment.toggleRead();
    comment.toggleRead();

    expect(comment.getReadStatus()).to.equal(false);
  });
});

describe("Comment text", () => {
  let comment: any;

  it("Doesn't allow empty string on creation", () => {
    const invalidText = "";

    expect(() => {
      createComment(invalidText);
    }).to.throw();
  });

  beforeEach(() => {
    const text = "Testing text to try the trivial tests";
    comment = createComment(text);
  });

  it("Sets the body text according to input", () => {
    const test_input = "This is a test input for comments.";

    comment.setBodyText(test_input);

    expect(comment.body === test_input).to.equal(true);
  });

  it("Doesn't allow empty string on setting text", () => {
    const invalidText = "";

    expect(() => {
      comment.setBodyText(invalidText);
    }).to.throw();
  });
});

describe("Comment replies", () => {
  let comment: any;

  beforeEach(() => {
    const text = "Testing text to try the trivial tests";
    comment = createComment(text);
  });

  it("Adds a reply", () => {
    const text = "Testing text to try the trivial tests";
    comment.addReply(text);

    expect(comment.replies.length === 1).to.equal(true);
  });

  it("doesn't allow replies in other replies", () => {
    const text_a = "testing";
    const text_b = "testing_b";

    const reply = comment.addReply(text_a);

    expect(() => reply.addReply(text_b)).to.throw();
  });

  it("Adds replies in chronological order", () => {
    const text1 = "Testing string 1";
    const text2 = "Testing string deux";

    comment.addReply(text1);
    comment.addReply(text2);

    expect(comment.replies[1].body === text2).to.equal(true);
  });
});
