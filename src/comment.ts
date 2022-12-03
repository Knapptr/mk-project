interface IReplies {
  //! TO ADD: User
  body: string;
  timestamp: Date;
}

interface IComment {
  read: Boolean;
  body: string;
  //! TO ADD: From User
  //! TO ADD: To User
  timestamp: Date;
  replies: IReplies[];
}

function createComment(body: string) {
  const comment = {
    // DATA
    read: false,
    body,
    timestamp: new Date(),
    replies: [],

    // METHODS -- SETTERS
    toggleRead: function () {
      this.read = !this.read;
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
