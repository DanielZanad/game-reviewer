import { Password } from '@app/entities/password';
import { User as UserDomain } from '@app/entities/user';
import { User as UserPrisma } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma(user: UserDomain) {
    return {
      name: user.name,
      id: user.id,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: new Date(),
    };
  }

  static toDomain(user: UserPrisma) {
    return new UserDomain({
      email: user.email,
      name: user.name,
      password: new Password(user.password),
    });
  }
}
