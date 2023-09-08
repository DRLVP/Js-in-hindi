// OBJECTS IN JAVASCRIPT


let newObj = Object.create(null); //singleton object
// console.log(newObj);

//THIS IS LITTEREL METHOD TO DECLEARE OBJECTS IN JAVASCRIPT
let mySym = Symbol('ommm');
let mynewSym = Symbol('ommm');

const obj = {
    name: 'durlov',
    age: 22,
    email: 'user@gmail.com',
    'location': 'LAKWA',
    [mynewSym]: 'hello',
    mySym: Symbol('omm5'), //object or vitorot symbol decleare koribole hole ami [] bracketor vitorot likhibo lagibo

    myFunc: function () {
        alert(`hello ${this.name}`);
    }
}

// ACCESS OBJ
// console.log(obj.name);
// console.log(obj['location']);
// console.log(typeof obj.mySym);

// CHANGE VALUE IN OBJECT KEY PAIR
obj.name = "DURLOV PHUKON";
// console.log(obj);

// jodi jikunu ata objetor jukunu keyr value lock koribo logia hoi tente ami FREEZ bibohar koru

Object.freeze(obj); //atia ami jdi object tur jikunu key value change koru tente ee change nohobo

obj.email = 'drlov@google.com';
// console.log(obj);

// console.log(obj.myFunc());//execute the function
// console.log(obj.myFunc); //return a function


/* ==================SINGLETON  OBJECT================*/
let Sym = Symbol('ommm');

let user = new Object(); //Declare a singleton object

user.id = 21435;
user.email = 'user@google.com';
// user.isLoggedIn = true;
// user.address = 'delhi, India';
// user.greet = function () {
//     alert(`hello ${this.id}`);
// }
// user[Sym] = 'ommm';
// console.log(user);

let user2 = { id: 55555, email: 'user@twitter.com' }
let user3 = { id: 55555, email: 'user@microsoft.com' }

// const returnTarget = Object.assign(user2, user3);
const allUsers = { ...user2, ...user3 };

// console.log(allUsers);

//++++++++++++++++++ ARRAY OBJECTS +++++++++++++

const userDetails = [
    {
        id: 22222,
        password: '2ekekk',
        email: 'user@gmail.com'
    },
    {
        id: 22222,
        password: '2ekekk',
        email: 'user@gmail.com'
    },
    {
        id: 22222,
        password: '2ekekk',
        email: 'user@gmail.com'
    },
    {
        id: 22222,
        password: '2ekekk',
        email: 'user@gmail.com'
    }
];

// console.log(userDetails[1].password);

// ACCESSING ALL KEY FROM AN ARRAY
/*
console.log(Object.keys(user)); //ee keybur return koribo ata arrayt (MOST IMPORTANT);

console.log(Object.values(user));//ee keybur return koribo ata arrayt (MOST IMPORTANT);

console.log(Object.entries(user)); //ee object propertie homuhok array loi covert kori die

console.log(user.hasOwnProperty('name'));

// console.log(Object.isSealed(user))

console.log(user.toString);
*/

// +++++++++++++ DE-STRUCTUREING IN OBJECT ++++++++++++++

const course = {
    name: 'js-in-hindi',
    price: 999,
    instructor: 'DRLOV'
}

const { instructor: mastor } = course; //iyat ami object tu bhangi lolu jate access korute code clean hoi tha k
const { price: dum } = course;
const { name: num2 } = course;

console.log(mastor);
console.log(dum);
console.log(num2);