import createTask, { ITask } from "./task";
import { validate } from "./utils";

// Use Enum?
// Add Abandoned
export type RequirementStatus = "not-started" | "in-progress" | "complete";

export interface IRequirement {
    title: string;
    description: string | null;
    status: RequirementStatus;
    setStatus(newState: RequirementStatus): void;
    setTitle(newTitle: string): void;
    addTask(title: string): void;
    getTasks(): ITask[];
}

function createRequirement(title: string, description: string | null = null): IRequirement {
    // Title validation/sanitation
    let sanitizedTitle = sanitizeTitleString(title);
    if (!validate.string.isNotEmpty(sanitizedTitle)) { throw new Error(`Invalid Requirement Title: "${title}"`) };
    let _title = sanitizedTitle;

    // tasks
    const tasks: ITask[] = [];
    // The Requirement object
    return {
        description,
        status: "not-started",

        get title() { return _title },

        setTitle(newTitle: string) {
            let sanitizedTitle = sanitizeTitleString(newTitle);
            if (!validateTitleString(sanitizedTitle)) {
                throw new Error(`Invalid Requirement Title: "${newTitle}" `);
            }
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
    }
}

function validateTitleString(sanitizedTitle: string): boolean {
    if (sanitizedTitle.length === 0) {
        return false
    }
    return true;
}

function sanitizeTitleString(title: string): string {
    let trimmedTitle = title.trim();
    return trimmedTitle;
}
export default createRequirement;
