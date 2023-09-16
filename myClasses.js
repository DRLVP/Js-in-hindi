// classes in JavaScript

// class user {
//     // class ot most important hoi constructor jetiai new keyword or dara ata notun object initialize hoi tatiai constructor nije nije call hoi jabo

//     constructor(userName, email, password) {
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}xyz`;
//     }
// }

// const Jhon = new user('jhon', 'jhon@email.com', 12341);

// console.log(Jhon.encryptPassword());


// BEHIND THE SCENE

function user1(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
}

user1.prototype.encryptPassword = function () {
    return `${this.password}jjjsa`;
}

// const pagol = new user1('pagol', 'pagolsb', 1212);

// console.log(pagol.encryptPassword());

// ++++++++++++ CLASS INHERITANCE ++++++++++++++

class creator {
    constructor(role, id, experience) {
        this.role = role;
        this.id = id;
        this.experience = experience;
    }

    logMe() {
        console.log(`hello all ${this.role} welcome to our organization`);
    }
}

class vlogger extends creator {
    constructor(role, id, experience) {
        super(role);
        this.id = id;
        this.ex = experience;

    }

    details() {
        console.log(`hello ${this.role} welcome to vlogging world`);
    }
}

const jhon = new creator('jhon', 2322, '2years');
// console.log(jhon);

const moto = new vlogger('motoG', 222, '4years');
// moto.details();
// moto.logMe();

// console.log(moto instanceof creator);

// +++++++++++ STATIC METHOD IN JAVASCRIPT ++++++++++++++++

class user {
    constructor(userName) {
        this.userName = userName;

    }

    logMe() {
        console.log(`hey ${this.userName}`);
    }

    static createId() { //static keyword a method tu belegok instance nidie
        return `__222`;
    }
}

const rocky = new user('rocky')
console.log(rocky.createId());



