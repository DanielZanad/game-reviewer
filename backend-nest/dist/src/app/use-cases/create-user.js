"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repositories/user-repository");
const user_1 = require("../entities/user");
const bcrypt = require("bcrypt");
const password_1 = require("../entities/password");
let CreateUser = class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(request) {
        const { email, name, password } = request;
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new user_1.User({
            email,
            name,
            password: new password_1.Password(hashedPassword),
        });
        await this.userRepository.create(user);
        return {
            user,
        };
    }
};
exports.CreateUser = CreateUser;
exports.CreateUser = CreateUser = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], CreateUser);
//# sourceMappingURL=create-user.js.map