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
      const reply: IReply = this._createReply(text);
      this.replies.push(reply);
    },

    // METHODS -- GETTERS
    getReadStatus: function () {
      return this.read;
    },

    // METHODS -- PRIVATE
    _createReply(body: string): IReply {
      const reply = {
        body,
        timestamp: new Date()
      };

      return reply;
    }
  };
  return comment;
}

export default createComment;
