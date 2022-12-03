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
}

function createReply(body: string): IReply {
  const reply = {
    body,
    timestamp: new Date()
  };

  return reply;
}

function createComment() {
  const comment: IComment = {
    // DATA
    read: false,
    body: "",
    timestamp: new Date(),
    replies: [],

    // METHODS -- SETTERS
    toggleRead: function () {
      this.read = !this.read;
    },
    setBodyText: function (text) {
      this.body = text;
    },
    addReply: function (text) {
      const reply: IReply = createReply(text);
      this.replies.push(reply);
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
