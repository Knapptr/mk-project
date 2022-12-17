import { expect } from "chai";
import createRequirement, { RequirementStatus, IRequirement } from "./requirement"

// Test 'Globals'
const requirementStates: { [key: string]: RequirementStatus } = {
    notStarted: "not-started",
    inProgress: "in-progress",
    complete: "complete",
}

const validTitle = "A valid Title";

describe("Factory", () => {
    it("won't allow for an empty string title", () => {
        expect(() => {
            createRequirement("")
        }).to.throw()
    })
    it("trims spaces from title", () => {
        expect(() => {
            createRequirement("   ");
        }).to.throw()
    })
    it("Creates a valid requirement title", () => {

        let requirement = createRequirement(validTitle);

        expect(requirement.title).to.equal(validTitle);
    })

    it("Defaults a requirement status to 'not-started'", () => {

        let requirement = createRequirement(validTitle);

        expect(requirement.status).to.equal("not-started")
    })

    it("handles optional description", () => {
        // not given descrip
        let nonDescriptRequirement = createRequirement(validTitle)
        // given descrip
        let validDescription = "a valid description."
        let descriptRequirement = createRequirement(validTitle, validDescription);

        expect(nonDescriptRequirement.description).to.equal(null);
        expect(descriptRequirement.description).to.equal(validDescription);

    })

})


describe("Requirement", () => {

    // Set 'globals' for Valid Requirement tests
    let requirement: IRequirement;
    beforeEach(() => {
        requirement = createRequirement(validTitle);
    })

    describe("title", () => {
        it("setTitle throws on empty string", () => {
            expect(() => { requirement.setTitle("") }).to.throw();
        })
        it("Changes name of title with setTitle", () => {
            let newValidTitle = "A new valid Title."

            requirement.setTitle(newValidTitle);

            expect(requirement.title).to.equal(newValidTitle);
        })
    })


    describe("status", () => {

        it("can set to 'in-progress' from 'not-started'", () => {

            let requirement = createRequirement(validTitle);

            requirement.setStatus(requirementStates.inProgress);

            expect(requirement.status).to.equal(requirementStates.inProgress);
        })
        it("can set to 'complete' from 'not-started'", () => {
            requirement.setStatus(requirementStates.complete);

            expect(requirement.status).to.equal(requirementStates.complete);
        })

        it("can set to 'complete' from 'in-progress", () => {
            requirement.setStatus(requirementStates.inProgress);
            requirement.setStatus(requirementStates.complete);

            expect(requirement.status).to.equal(requirementStates.complete);
        })

    })

    describe("Tasks", () => {
        let requirement: IRequirement;
        beforeEach(() => {
            requirement = createRequirement("valid req name");
        })
        it("can create a task", () => {
            let validTaskTitle = "a valid title"
            requirement.addTask(validTaskTitle);

            expect(requirement.getTasks().length).to.equal(1);
        })
    })

})
