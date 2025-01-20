import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from 'src/app/entities/user';
import { UserRepository } from 'src/app/repositories/user-repository';
import { PrismaUserMapper } from '../mappers/user-mapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}
  async emailExists(email: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({ where: { email } });

    if (user) {
      return PrismaUserMapper.toDomain(user);
    }
    return null;
  }

  async create(user: User): Promise<void> {
    await this.prismaService.user.create({
      data: PrismaUserMapper.toPrisma(user),
    });
  }
}
