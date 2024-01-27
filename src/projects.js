// THE PROJECT CLASS CREATES A PROJECT-FOLDER & ADDS, DELETES, ETC. ASSOCIATED PROJECT TASKS
// FOR THE PROJECT PANEL CREATES PROJECT AND LIST OF TASKS (RIGHT MAIN)
export default class Project {
    constructor(name) {
        this.name = name
        this.tasks = []
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}