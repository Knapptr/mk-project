interface ICompletedState {
    status: boolean;
    time: Date | null
}

interface ICompletedHistory {
    markedAs: "complete" | "incomplete";
    at: Date
}

function createTask() {
    let completed: ICompletedState = { status: false, time: null }
    let history: ICompletedHistory[] = [];

    return {
        complete() {
            if (completed.status) {
                throw new Error("Task status marked complete. Cannot complete again.")
            }
            completed.status = true;
            completed.time = new Date();
            this._addToHistory(completed);
        },

        uncomplete() {
            if (!completed.status) {
                throw new Error("Task status marked incomplete. Cannot mark incomplete.");
            }
            this._addToHistory(completed);
            completed.time = null;
            completed.status = false;
        },

        _addToHistory(completedState: ICompletedState) {
            const historyObject: ICompletedHistory = {
                markedAs: completedState.status ? "complete" : "incomplete",
                at: completedState.time as Date
            }
            history.push(historyObject);
        },

        getCompletedStatus() {
            return completed;
        },

        getHistory() {
            return history;
        }
    }
}
export default createTask;
