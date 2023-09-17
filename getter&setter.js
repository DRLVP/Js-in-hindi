// GETTER AND SETTER

class user {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return `${this._password}pagol`;
        // user bila k ai2 password pabo
    }
    set password(val) {
        // user a dia value tu ami iyat set koru 
        this._password = val;
    }

    // by default getter aru setter class ot thakai aru getter dile setter diboi lagibo nohole ee nosole
}

// const jhon = new user('hello@google.com', 122);
// console.log(jhon.password);

function creator(email, role) {
    this._email = email;
    this._role = role;

    Object.defineProperty(this, 'email', {
        get: function () {
            return `${this._email}pagol`;
        },
        set: function (value) {
            this.email = value;
        }
    })
}


const rocky = new creator('creator@demo.com', 'blogger');

console.log(rocky.email);