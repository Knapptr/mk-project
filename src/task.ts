interface ICompletedState {
  status: boolean;
  time: Date | null;
}

interface ICompletedHistory {
  markedAs: "complete" | "incomplete";
  at: Date;
}

interface ITask {
  completed: ICompletedState;
  history: ICompletedHistory[];
  complete(): void;
  uncomplete(): void;
  _addToHistory(completedState: ICompletedState): void;
  getCompletedStatus(): ICompletedState;
  getHistory(): ICompletedHistory[];
}

function createTask(): ITask {
  const task: ITask = {
    completed: { status: false, time: null },
    history: [],

    complete: function () {
      if (this.completed.status) {
        throw new Error("Task status marked complete. Cannot complete again.");
      }
      this.completed.status = true;
      this.completed.time = new Date();
      this._addToHistory(this.completed);
    },

    uncomplete: function () {
      if (!this.completed.status) {
        throw new Error(
          "Task status marked incomplete. Cannot mark incomplete."
        );
      }
      this._addToHistory(this.completed);
      this.completed.time = null;
      this.completed.status = false;
    },

    _addToHistory(completedState: ICompletedState) {
      const historyObject: ICompletedHistory = {
        markedAs: completedState.status ? "complete" : "incomplete",
        at: completedState.time as Date
      };
      this.history.push(historyObject);
    },

    getCompletedStatus() {
      return this.completed;
    },

    getHistory() {
      return this.history;
    }
  };

  return task;
}

export default createTask;
