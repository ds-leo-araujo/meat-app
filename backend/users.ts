export class User {
    constructor (
        public email: string,
        public name: string,
        private password: string
    ) {};

    matches(another: User): boolean {
        return  another !== undefined &&
                another.email === this.email &&
                another.password === this.password;
    };
};

export const users: {[key: string]: User} = {
    'lab@mail.com': new User('lab@mail.com', 'lab', 'lab123'),
    'lia@mail.com': new User('lia@mail.com', 'lbo', 'lbo123'),
    'gabob@mail.com': new User('gabob@mail.com', 'gabob', 'gabob123')
};
