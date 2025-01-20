import { User } from '@app/entities/user';
import { UserRepository } from '@app/repositories/user-repository';

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
  async emailExists(email: string): Promise<User | null> {
    const result = this.users.filter((user) => {
      return user.email === email;
    });

    if (result) {
      return result[0];
    }
    return null;
  }
}
