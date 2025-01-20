import { UserRepository } from '@app/repositories/user-repository';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signIn(email: string, pass: string): Promise<{
        access_token: string;
    }>;
}
