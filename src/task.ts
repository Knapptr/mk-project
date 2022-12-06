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
    setComplete(): void;
    setUncomplete(): void;
    setTitle(newTitle: string): void

    getCompletedStatus(): ICompletedState;
    getHistory(): ICompletedHistory[];

    _addToHistory(completedState: ICompletedState): void;
}

function createTask(taskTitle: string): ITask {
    //trim whitespace
    taskTitle = taskTitle.trim();
    // validate
    if (!validate.string.isNotEmpty(taskTitle)) {
        throw new Error("Task title can not be empty")
    }
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
            if (!validate.string.isNotEmpty(newTitle)) { throw new Error("Task title can not be empty") };
            title = newTitle;
        },

        // GET METHODS
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
