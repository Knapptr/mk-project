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
        }).toThrow()
    })
    it("trims spaces from title", () => {
        expect(() => {
            createRequirement("   ");
        }).toThrow()
    })
    it("Creates a valid requirement title", () => {

        let requirement = createRequirement(validTitle);

        expect(requirement.title).toEqual(validTitle);
    })

    it("Defaults a requirement status to 'not-started'", () => {

        let requirement = createRequirement(validTitle);

        expect(requirement.status).toEqual("not-started")
    })

    it("handles optional description", () => {
        // not given descrip
        let nonDescriptRequirement = createRequirement(validTitle)
        // given descrip
        let validDescription = "a valid description."
        let descriptRequirement = createRequirement(validTitle, validDescription);

        expect(nonDescriptRequirement.description).toBe(null);
        expect(descriptRequirement.description).toEqual(validDescription);

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
            expect(() => { requirement.setTitle("") }).toThrow();
        })
        it("resets to a valid title", () => {
            let newValidTitle = "A new valid Title."

            requirement.setTitle(newValidTitle);

            expect(requirement.title).toEqual(newValidTitle);
        })
    })


    describe("status", () => {

        it("can set to 'in-progress' from 'not-started'", () => {

            let requirement = createRequirement(validTitle);

            requirement.setStatus(requirementStates.inProgress);

            expect(requirement.status).toEqual(requirementStates.inProgress);
        })
        it("can set to 'complete' from 'not-started'", () => {
            requirement.setStatus(requirementStates.complete);

            expect(requirement.status).toEqual(requirementStates.complete);
        })

        it("can set to 'complete' from 'in-progress", () => {
            requirement.setStatus(requirementStates.inProgress);
            requirement.setStatus(requirementStates.complete);

            expect(requirement.status).toEqual(requirementStates.complete);
        })

        it("cant set to 'not-started'", () => {
            requirement.setStatus(requirementStates.inProgress)

            expect(() => { requirement.setStatus(requirementStates.notStarted) }).toThrow();

            requirement.setStatus(requirementStates.complete);

            expect(() => { requirement.setStatus(requirementStates.notStarted) }).toThrow();


        })
    })

})
