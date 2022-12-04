import createTask from "./task";

describe("Task Completion", () => {
  let task: any;

  beforeEach(() => {
    task = createTask();
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
    task = createTask();
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
