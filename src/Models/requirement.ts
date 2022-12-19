import createTask, { ITask } from "./task";
import { validate } from "../utils/utils";

export type RequirementStatus =
  | "not-started"
  | "in-progress"
  | "complete"
  | "abandoned";

export interface IRequirement {
  title: string;
  description: string | null;
  status: RequirementStatus;
  setStatus(newState: RequirementStatus): void;
  setTitle(newTitle: string): void;
  addTask(title: string): void;
  getTasks(): ITask[];
}

function createRequirement(
  title: string,
  description: string | null = null
): IRequirement {
  // Title validation/sanitation
  title = sanitizeTitleString(title);
  validate.string.isNotEmpty(title, "Requirement title must not be empty.");
  let _title = title;

  // tasks
  const tasks: ITask[] = [];

  // The Returned Requirement object
  return {
    description,
    status: "not-started",

    get title() {
      return _title;
    },

    setTitle(newTitle: string) {
      let sanitizedTitle = sanitizeTitleString(newTitle);
      validate.string.isNotEmpty(
        sanitizedTitle,
        "Title string must not be empty"
      );
      _title = sanitizedTitle;
    },

    setStatus(newState) {
      this.status = newState;
    },

    addTask(title) {
      let createdTask = createTask(title);
      tasks.push(createdTask);
    },
    getTasks() {
      return tasks;
    }
  };
}

function sanitizeTitleString(title: string): string {
  let trimmedTitle = title.trim();
  return trimmedTitle;
}
export default createRequirement;
