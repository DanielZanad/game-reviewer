import { randomUUID } from 'crypto';
import { Replace } from '../helpers/replace';
import { Password } from './password';

interface UserProps {
  name: string;
  email: string;
  password: Password;
  createdAt: Date | null;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: Replace<UserProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = { ...props, createdAt: props.createdAt ?? new Date() };
  }

  // Getter for id
  get id(): string {
    return this._id;
  }

  // Getter and setter for name
  get name(): string {
    return this.props.name;
  }

  set name(value: string) {
    if (!value.trim()) {
      throw new Error('Name cannot be empty.');
    }
    this.props.name = value;
  }

  // Getter and setter for email
  get email(): string {
    return this.props.email;
  }

  set email(value: string) {
    if (!value.trim() || !value.includes('@')) {
      throw new Error('Invalid email format.');
    }
    this.props.email = value;
  }

  // Getter and setter for password
  get password(): string {
    return this.props.password.value;
  }

  set password(value: Password) {
    this.props.password = value;
  }

  // Getter for createdAt
  get createdAt(): Date | null {
    return this.props.createdAt;
  }
}
