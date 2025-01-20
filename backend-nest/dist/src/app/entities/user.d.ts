import { Replace } from '../helpers/replace';
import { Password } from './password';
interface UserProps {
    name: string;
    email: string;
    password: Password;
    createdAt: Date | null;
}
export declare class User {
    private _id;
    private props;
    constructor(props: Replace<UserProps, {
        createdAt?: Date;
    }>);
    get id(): string;
    get name(): string;
    set name(value: string);
    get email(): string;
    set email(value: string);
    get password(): string;
    set password(value: Password);
    get createdAt(): Date | null;
}
export {};
