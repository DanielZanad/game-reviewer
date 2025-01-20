import { PrismaService } from '../prisma.service';
import { User } from 'src/app/entities/user';
import { UserRepository } from 'src/app/repositories/user-repository';
export declare class PrismaUserRepository implements UserRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    emailExists(email: string): Promise<User>;
    create(user: User): Promise<void>;
}
