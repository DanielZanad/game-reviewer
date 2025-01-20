import { IsEmail, IsNotEmpty } from 'class-validator';

export class signInUserBody {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
