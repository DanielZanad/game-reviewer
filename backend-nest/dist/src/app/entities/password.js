"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
class Password {
    get value() {
        return this.password;
    }
    set value(password) {
        this.password = password;
    }
    validatePasswordLength(password) {
        return password.length >= 6 && password.length <= 230;
    }
    constructor(password) {
        const isPasswordLengthValid = this.validatePasswordLength(password);
        if (!isPasswordLengthValid) {
            throw new Error('Password length error!');
        }
        if (password.match(/^[0-9]+$/) != null) {
            throw new Error('Password only contains numbers!');
        }
        this.password = password;
    }
}
exports.Password = Password;
//# sourceMappingURL=password.js.map