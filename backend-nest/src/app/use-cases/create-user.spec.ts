import { InMemoryUserRepository } from '@test/repository/in-memory-user-repository';
import { CreateUser } from './create-user';

describe('create user', () => {
  it('should be able to create a new user', async () => {
    const userRepository = new InMemoryUserRepository();
    const createUser = new CreateUser(userRepository);
    const rawPassword = '123abc';

    const { user } = await createUser.execute({
      email: 'jesse@pinkman.com',
      name: 'Jesse',
      password: rawPassword,
    });
    expect(user).toBeTruthy();
    expect(user.name).toEqual('Jesse');
    expect(user.email).toEqual('jesse@pinkman.com');
    expect(user.password).not.toEqual(rawPassword);
  });
});
