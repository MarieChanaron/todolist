export class User {

    constructor(name, icon) {
        this._name = name;
        this._icon = icon;
    }

    get name() {
        return this._name;
    }

    get icon() {
        return this._icon;
    }

}