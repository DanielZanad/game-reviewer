import { User as UserDomain } from '@app/entities/user';
import { User as UserPrisma } from '@prisma/client';
export declare class PrismaUserMapper {
    static toPrisma(user: UserDomain): {
        name: string;
        id: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    };
    static toDomain(user: UserPrisma): UserDomain;
}
