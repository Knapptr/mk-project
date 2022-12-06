import createTask, { ITask } from "./task";

const VALID_TASK_TITLE = "valid task title"

describe("Task creation", () => {
    it("checks for valid title", () => {
        const invalidTitle = "   "
        expect(() => {
            createTask(invalidTitle)
        }).toThrow()
    })
    it("inits with a valid title", () => {
        let task = createTask(VALID_TASK_TITLE);

        expect(task.title).toBe(VALID_TASK_TITLE);
    })
})
describe("Title", () => {
    it("validates changing the title", () => {
        const task = createTask(VALID_TASK_TITLE);
        const invalidTitle = "  ";
        expect(() => {
            task.setTitle(invalidTitle)
        }).toThrow()
    })
})
describe("Task Completion", () => {
    let task: ITask;

    beforeEach(() => {
        task = createTask(VALID_TASK_TITLE);
    });

    it("Init complete state to false", () => {
        expect(task.getCompletedStatus().status).toBe(false);
    });

    it("Marks task as finished", () => {
        task.setComplete();

        expect(task.getCompletedStatus().status).toBe(true);
    });

    it("Timestamps on completion", () => {
        task.setComplete();

        expect(task.getCompletedStatus().time === null).toBe(false);
    });

    it("Rejects complete() when already completed)", () => {
        task.setComplete();

        expect(() => {
            task.setComplete();
        }).toThrow();
    });
});

describe("Task Incomplete", () => {
    let task: any;

    beforeEach(() => {
        task = createTask(VALID_TASK_TITLE);
    });

    it("Marks a completed task as incomplete - sets date to null", () => {
        task.setComplete();
        task.setUncomplete();

        expect(task.getCompletedStatus().status).toBe(false);
        expect(task.getCompletedStatus().time).toBe(null);
    });

    it("Won't allow uncomplete on incomplete task", () => {
        expect(() => task.setUncomplete()).toThrow();
    });

    it("keeps history of complete state change", () => {
        task.setComplete();

        expect(task.getHistory().length).toBe(1);
    });
});
