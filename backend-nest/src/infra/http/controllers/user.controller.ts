import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from "@nestjs/common";
import { CreateUserBody } from "../dtos/create-user-body";
import { User } from "src/app/entities/user";
import { CreateUser } from "src/app/use-cases/create-user";
import { Password } from "@app/entities/password";
import { signInUserBody } from "../dtos/sign-in-user-body";
import { AuthService } from "@infra/auth/auth.service";
import { AuthGuard } from "@infra/auth/auth.guard";
import { UserViewModel } from "../view-model/user-view-model";

@Controller("user")
export class UserController {
  constructor(
    private createUser: CreateUser,
    private authUser: AuthService
  ) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { name, email, password } = body;

    const payload = new User({ name, email, password: new Password(password) });

    const { user } = await this.createUser.execute(payload);

    return { user: UserViewModel.toHTTP(user) };
  }

  @Post("login")
  signIn(@Body() signInDto: signInUserBody) {
    return this.authUser.signIn(signInDto.email, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
