export declare class Password {
    private password;
    get value(): string;
    set value(password: string);
    private validatePasswordLength;
    constructor(password: string);
}
