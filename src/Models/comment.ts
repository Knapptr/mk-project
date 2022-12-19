// Add id's to objects

interface IComment {
  isReply: boolean;
  read: boolean;
  body: string;
  user_from: string;
  user_to: string | null;
  timestamp: Date;
  replies: IComment[];

  toggleRead: () => void;
  setBodyText: (text: string) => void;
  addReply: (text: string, fromUser: string, toUser: string | null) => IComment;

  getReadStatus: () => boolean;
}

function bodyIsValid(text: string): boolean {
  return text.trim().length !== 0;
}

function createComment(
  text: string,
  fromUser: string,
  toUser: string | null = null,
  isReply: boolean = false
) {
  if (!bodyIsValid(text)) {
    throw new Error(
      `Comment text invalid: text must not be empty string. Input: "${text}"`
    );
  }

  const comment: IComment = {
    // DATA
    user_from: fromUser,
    user_to: toUser,
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
    addReply: function (text, fromUser, toUser = null) {
      if (this.isReply) throw new Error("Replies cannot contain replies");

      const reply: IComment = createComment(text, fromUser, toUser, true);
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
