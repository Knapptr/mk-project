export type RequirementStatus = "not-started" | "in-progress" | "complete";
export interface IRequirement {
    title: string;
    description: string | null;
    status: RequirementStatus;
    setStatus(newState: RequirementStatus): void;
    setTitle(newTitle: string): void;
}

function createRequirement(title: string, description: string | null = null): IRequirement {
    let sanitizedTitle = sanitizeTitleString(title);
    if (!validateTitleString(sanitizedTitle)) { throw new Error(`Invalid Requirement Title: "${title}"`) };
    let _title = sanitizedTitle;
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
            if ((this.status === "complete" || this.status === "in-progress") && newState === "not-started") {
                throw new Error("Cannot mark an already started task as 'not-started'");
            }
            this.status = newState;
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
