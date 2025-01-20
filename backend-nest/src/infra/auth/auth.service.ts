import { User } from '@app/entities/user';
import { UserRepository } from '@app/repositories/user-repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user: User = await this.userRepository.emailExists(email);

    console.log('Password send through the request: ', pass);
    console.log('Password from user: ', user.password);

    const match = await bcrypt.compare(pass, user.password);
    if (!match) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
