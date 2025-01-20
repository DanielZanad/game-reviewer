import { UserRepository } from '../repositories/user-repository';
import { User } from '../entities/user';
interface UserCreateRequest {
    name: string;
    email: string;
    password: string;
}
interface UserCreateResponse {
    user: User;
}
export declare class CreateUser {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(request: UserCreateRequest): Promise<UserCreateResponse>;
}
export {};
