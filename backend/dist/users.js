"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    ;
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    ;
    return User;
}());
exports.User = User;
;
exports.users = {
    'lab@mail.com': new User('lab@mail.com', 'lab', 'lab123'),
    'lia@mail.com': new User('lia@mail.com', 'lbo', 'lbo123'),
    'gabob@mail.com': new User('gabob@mail.com', 'gabob', 'gabob123')
};
