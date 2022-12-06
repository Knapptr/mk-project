// Rewrite replies to be comments
// Add comment field for reply
// Add id's to objects

interface IReply {
  //! TO ADD: User
  body: string;
  timestamp: Date;
}

interface IComment {
  read: boolean;
  body: string;
  //! TO ADD: From User
  //! TO ADD: To User
  timestamp: Date;
  replies: IReply[];

  toggleRead: () => void;
  setBodyText: (text: string) => void;
  addReply: (text: string) => void;

  getReadStatus: () => boolean;

  _createReply: (body: string) => IReply;
}

function bodyIsValid(text: string): boolean {
  return text.trim().length !== 0;
}

function createComment(text: string) {
  if (!bodyIsValid(text)) {
    throw new Error(
      `Comment text invalid: text must not be empty string. Input: "${text}"`
    );
  }

  const comment: IComment = {
    // DATA
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
      const reply: IReply = this._createReply(text);
      this.replies.push(reply);
    },

    // METHODS -- GETTERS
    getReadStatus: function () {
      return this.read;
    },

    // METHODS -- PRIVATE
    _createReply(body: string): IReply {
      const reply: IReply = {
        body,
        timestamp: new Date()
      };

      return reply;
    }
  };
  return comment;
}

export default createComment;
