"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserMapper = void 0;
const password_1 = require("../../../../app/entities/password");
const user_1 = require("../../../../app/entities/user");
class PrismaUserMapper {
    static toPrisma(user) {
        return {
            name: user.name,
            id: user.id,
            email: user.email,
            password: user.password,
            createdAt: user.createdAt,
            updatedAt: new Date(),
        };
    }
    static toDomain(user) {
        return new user_1.User({
            email: user.email,
            name: user.name,
            password: new password_1.Password(user.password),
        });
    }
}
exports.PrismaUserMapper = PrismaUserMapper;
//# sourceMappingURL=user-mapper.js.map