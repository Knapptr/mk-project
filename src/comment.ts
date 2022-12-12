// Add id's to objects

interface IComment {
  isReply: boolean;
  read: boolean;
  body: string;
  //! TO ADD: From User
  //! TO ADD: To User
  timestamp: Date;
  replies: IComment[];

  toggleRead: () => void;
  setBodyText: (text: string) => void;
  addReply: (text: string) => IComment;

  getReadStatus: () => boolean;
}

function bodyIsValid(text: string): boolean {
  return text.trim().length !== 0;
}

function createComment(text: string, isReply: boolean = false) {
  if (!bodyIsValid(text)) {
    throw new Error(
      `Comment text invalid: text must not be empty string. Input: "${text}"`
    );
  }

  const comment: IComment = {
    // DATA
    isReply: isReply,
    read: false,
    body: text,
    timestamp: new Date(),
    replies: [],

    // METHODS -- SETTERS
    toggleRead: function () {
      this.read = !this.read;
    },
    setBodyText: function (text) {
      if (!bodyIsValid(text)) {
        throw new Error(
          `Comment text invalid: text must not be empty string. Input: "${text}"`
        );
      }
      this.body = text;
    },
    addReply: function (text) {
      if (this.isReply) throw new Error("Replies cannot contain replies");

      const reply: IComment = createComment(text, true);
      this.replies.push(reply);

      return reply;
    },

    // METHODS -- GETTERS
    getReadStatus: function () {
      return this.read;
    }

    // METHODS -- PRIVATE
  };
  return comment;
}

export default createComment;
