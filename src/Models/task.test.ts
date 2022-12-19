import { expect } from "chai";
import createTask, { ITask } from "./task";

const VALID_TASK_TITLE = "valid task title";

describe("Task creation", () => {
  it("checks for valid title", () => {
    const invalidTitle = "   ";
    expect(() => {
      createTask(invalidTitle);
    }).to.throw();
  });
  it("inits with a valid title", () => {
    let task = createTask(VALID_TASK_TITLE);

    expect(task.title).to.equal(VALID_TASK_TITLE);
  });
});
describe("Title", () => {
  it("validates changing the title", () => {
    const task = createTask(VALID_TASK_TITLE);
    const invalidTitle = "  ";
    expect(() => {
      task.setTitle(invalidTitle);
    }).to.throw();
  });
});
describe("Task Completion", () => {
  let task: ITask;

  beforeEach(() => {
    task = createTask(VALID_TASK_TITLE);
  });

  it("Init complete state to false", () => {
    expect(task.getCompletedStatus().status).to.equal(false);
  });

  it("Marks task as finished", () => {
    task.setComplete();

    expect(task.getCompletedStatus().status).to.equal(true);
  });

  it("Timestamps on completion", () => {
    task.setComplete();

    expect(task.getCompletedStatus().time === null).to.equal(false);
  });

  it("Rejects complete() when already completed)", () => {
    task.setComplete();

    expect(() => {
      task.setComplete();
    }).to.throw();
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

    expect(task.getCompletedStatus().status).to.equal(false);
    expect(task.getCompletedStatus().time).to.equal(null);
  });

  it("Won't allow uncomplete on incomplete task", () => {
    expect(() => task.setUncomplete()).to.throw();
  });

  it("keeps history of complete state change", () => {
    task.setComplete();

    expect(task.getHistory().length).to.equal(1);
  });
});

describe("Task users", () => {
  let task: any;

  beforeEach(() => {
    task = createTask(VALID_TASK_TITLE);
  });

  it("Adds a user_id to the end of users array", () => {
    const user_id = "01";
    task.assignUser(user_id);

    expect(task.getAssignedUsers().at(-1)).to.equal("01");
  });
});
