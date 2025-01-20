import { CreateUserBody } from '../dtos/create-user-body';
import { User } from 'src/app/entities/user';
import { CreateUser } from 'src/app/use-cases/create-user';
import { signInUserBody } from '../dtos/sign-in-user-body';
import { AuthService } from '@infra/auth/auth.service';
export declare class UserController {
    private createUser;
    private authUser;
    constructor(createUser: CreateUser, authUser: AuthService);
    create(body: CreateUserBody): Promise<{
        user: User;
    }>;
    signIn(signInDto: signInUserBody): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
