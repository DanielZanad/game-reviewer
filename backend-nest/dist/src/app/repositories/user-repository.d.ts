import { User } from '../entities/user';
export declare abstract class UserRepository {
    abstract create(user: User): Promise<void>;
    abstract emailExists(email: string): Promise<User | null>;
}
