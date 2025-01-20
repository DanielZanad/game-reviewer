"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const crypto_1 = require("crypto");
class User {
    constructor(props) {
        this._id = (0, crypto_1.randomUUID)();
        this.props = { ...props, createdAt: props.createdAt ?? new Date() };
    }
    get id() {
        return this._id;
    }
    get name() {
        return this.props.name;
    }
    set name(value) {
        if (!value.trim()) {
            throw new Error('Name cannot be empty.');
        }
        this.props.name = value;
    }
    get email() {
        return this.props.email;
    }
    set email(value) {
        if (!value.trim() || !value.includes('@')) {
            throw new Error('Invalid email format.');
        }
        this.props.email = value;
    }
    get password() {
        return this.props.password.value;
    }
    set password(value) {
        this.props.password = value;
    }
    get createdAt() {
        return this.props.createdAt;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map