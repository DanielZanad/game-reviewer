import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './controllers/user.controller';
import { CreateUser } from 'src/app/use-cases/create-user';
import { AuthModule } from '@infra/auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [UserController],
  providers: [CreateUser],
})
export class HttpModule {}
