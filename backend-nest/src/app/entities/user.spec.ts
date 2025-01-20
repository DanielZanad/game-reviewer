import { Password } from './password';
import { User } from './user';

describe('user ', () => {
  it('should create an user', () => {
    const user = new User({
      email: 'walter@white.com',
      name: 'Walter White',
      password: new Password('iamthedanger'),
    });

    expect(user).toBeInstanceOf(User);
    expect(user).toBeTruthy();
  });
});
