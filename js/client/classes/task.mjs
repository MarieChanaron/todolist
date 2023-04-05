export class Task {

    constructor(state, description, user) {
        this._id = Math.random().toString(36).substring(2);
        this._state = state;
        this._description = description;
        this._user = user;
    }

    get id() {
        return this._id;
    }

    get state() {
        return this._state;
    }

    get description() {
        return this._description;
    }

    get user() {
        return this._user;
    }

    toggleState() {
        this._state = !this._state;
    }
}