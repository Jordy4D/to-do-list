console.log('taskTest')

export class Task {
    constructor(name, detail) {
        this.name = name;
        this.detail = detail;
    }

    changeName(newName) {
        this.name = newName;
    }
    
    changeDetail(newDetail) {
        this.detail = newDetail;
    }

    
}