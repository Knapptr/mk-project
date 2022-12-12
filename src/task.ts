import { validate } from "./utils";

interface ICompletedState {
  status: boolean;
  time: Date | null;
}

interface ICompletedHistory {
  markedAs: "complete" | "incomplete";
  at: Date;
}

export interface ITask {
  completed: ICompletedState;
  history: ICompletedHistory[];
  title: string;
  setComplete(): void;
  setUncomplete(): void;
  setTitle(newTitle: string): void;

  getCompletedStatus(): ICompletedState;
  getHistory(): ICompletedHistory[];

  _addToHistory(completedState: ICompletedState): void;
}

function createTask(taskTitle: string): ITask {
  //trim whitespace
  taskTitle = taskTitle.trim();
  // validate
  validate.string.isNotEmpty(
    taskTitle,
    "Task title must not be an empty string."
  );
  let title = taskTitle;

  const task: ITask = {
    completed: { status: false, time: null },
    history: [],

    // SET METHODS
    setComplete() {
      if (this.completed.status) {
        throw new Error("Task status marked complete. Cannot complete again.");
      }
      this.completed.status = true;
      this.completed.time = new Date();
      this._addToHistory(this.completed);
    },

    setUncomplete() {
      if (!this.completed.status) {
        throw new Error(
          "Task status marked incomplete. Cannot mark incomplete."
        );
      }
      this._addToHistory(this.completed);
      this.completed.time = null;
      this.completed.status = false;
    },
    setTitle(newTitle) {
      //sanitize
      newTitle = newTitle.trim();
      //validate
      validate.string.isNotEmpty(
        newTitle,
        "Task title must not be an empty string."
      );
      title = newTitle;
    },

    // GET METHODS
    get title() {
      return title;
    },
    set title(_invalid) {
      throw new Error("Title must be set with setTitle()")
    },
    getCompletedStatus() {
      return this.completed;
    },

    getHistory() {
      return this.history;
    },

    // PRIVATE METHODS
    _addToHistory(completedState) {
      const historyObject: ICompletedHistory = {
        markedAs: completedState.status ? "complete" : "incomplete",
        at: completedState.time as Date
      };
      this.history.push(historyObject);
    }
  };

  return task;
}

export default createTask;
