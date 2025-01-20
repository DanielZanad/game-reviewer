import { Password } from './password';

describe('password ', () => {
  it('should create a password', () => {
    const password = new Password('iamthedanger');

    expect(password).toBeInstanceOf(Password);
    expect(password).toBeTruthy();
    expect(password.value).toEqual(password.value);
  });

  it('should not be able create a password with only digits', () => {
    expect(() => new Password('12332131')).toThrow();
  });

  it('should not be able create a password with less than 6 characters', () => {
    expect(() => new Password('123ab')).toThrow();
  });

  it('should not be able create a password with more than 230 characters', () => {
    expect(() => new Password('a'.repeat(231))).toThrow();
  });
});
