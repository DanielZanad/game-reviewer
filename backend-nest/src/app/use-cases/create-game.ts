import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/user-repository";
import { User } from "../entities/user";
import * as bcrypt from "bcrypt";
import { Password } from "@app/entities/password";

interface GameCreateRequest {
  name: string;
  email: string;
  password: string;
}

interface GameCreateResponse {
  user: User;
}

@Injectable()
export class CreateGame {
  constructor(private userRepository: UserRepository) {}

  async execute(request: UserCreateRequest): Promise<UserCreateResponse> {
    const { email, name, password } = request;

    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      email,
      name,
      password: new Password(hashedPassword),
    });
    await this.userRepository.create(user);

    return {
      user,
    };
  }
}
