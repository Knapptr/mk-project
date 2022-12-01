import createTask from "./task";


describe("Task Completion", () => {
    let task: any

    beforeEach(() => {
        task = createTask();
    })

    it("Init complete state to false", () => {


        expect(task.getCompletedStatus().status).toBe(false);
    })

    it("Marks task as finished", () => {

        task.complete();

        expect(task.getCompletedStatus().status).toBe(true);
    })


    it("Timestamps on completion", () => {

        task.complete();

        expect(task.getCompletedStatus().time?.getMilliseconds()).toBeLessThan(Date.now());
    })

    it("Rejects complete() when already completed)", () => {

        task.complete();

        expect(() => { task.complete() }).toThrow();
    })
})

describe("Task Incomplete", () => {
    let task: any

    beforeEach(() => {
        task = createTask();
    })

    it("Marks a completed task as incomplete - sets date to null", () => {

        task.complete();
        task.uncomplete();

        expect(task.getCompletedStatus().status).toBe(false);
        expect(task.getCompletedStatus().time).toBe(null);
    })

    it("Won't allow uncomplete on incomplete task", () => {

        expect(() => task.uncomplete()).toThrow();

    })

    it("keeps history of complete state change", () => {

        task.complete();

        expect(task.getHistory().length).toBe(1);
    })
})
