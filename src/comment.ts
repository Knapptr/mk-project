interface IReplies {
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
  replies: IReplies[];

  toggleRead: () => void;
  setBodyText: (text: string) => void;

  getReadStatus: () => boolean;
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

    // METHODS -- GETTERS
    getReadStatus: function () {
      return this.read;
    }

    // METHODS -- PRIVATE
  };
  return comment;
}

export default createComment;
