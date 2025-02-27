import { User } from "@app/entities/user";
import { UserRepository } from "@app/repositories/user-repository";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, pass: string) {
    const user: User = await this.userRepository.emailExists(email);
    const match = await bcrypt.compare(pass, user.password);
    if (!match) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const payload = { user_id: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
