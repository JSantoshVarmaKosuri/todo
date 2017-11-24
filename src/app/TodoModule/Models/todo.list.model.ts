export interface TodoModel {
    title: string;
    description: string;
    createdAt: string;
    _id: string;
}

export interface TodoSaveModel {
    title: string;
    description: string;
}

export class Todo implements TodoModel {
    createdAt: string;
    _id: string;

    constructor(public title: string, public description: string) {
        const date = new Date();
        this.createdAt = date.toUTCString();
        this._id = date.valueOf().toString();
    }
}
