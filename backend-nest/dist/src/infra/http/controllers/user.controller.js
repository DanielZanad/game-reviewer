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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const create_user_body_1 = require("../dtos/create-user-body");
const user_1 = require("../../../app/entities/user");
const create_user_1 = require("../../../app/use-cases/create-user");
const password_1 = require("../../../app/entities/password");
const sign_in_user_body_1 = require("../dtos/sign-in-user-body");
const auth_service_1 = require("../../auth/auth.service");
const auth_guard_1 = require("../../auth/auth.guard");
const user_view_model_1 = require("../view-model/user-view-model");
let UserController = class UserController {
    constructor(createUser, authUser) {
        this.createUser = createUser;
        this.authUser = authUser;
    }
    async create(body) {
        const { name, email, password } = body;
        const payload = new user_1.User({ name, email, password: new password_1.Password(password) });
        const { user } = await this.createUser.execute(payload);
        return { user: user_view_model_1.UserViewModel.toHTTP(user) };
    }
    signIn(signInDto) {
        return this.authUser.signIn(signInDto.email, signInDto.password);
    }
    getProfile(req) {
        return req.user;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_body_1.CreateUserBody]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_user_body_1.signInUserBody]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "signIn", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)("profile"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getProfile", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [create_user_1.CreateUser,
        auth_service_1.AuthService])
], UserController);
//# sourceMappingURL=user.controller.js.map