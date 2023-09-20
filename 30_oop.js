/* javascript and classes
javascript technically class atia u nai primarily javascript prototype-based language hoi/


@:-- what is oop?
ANSWER:-- oop mane hoise object oriented programming . oop ata programming paradime mane hoise code likha structure kenekuwa hoi

@:-- what is object?
ANSWER:-- Object hoise kisuman properties aru method or collection

@:--- why we use OOP?
ANSWER:-- spgaty code avoid koribor karone mane code chunk reuse koribor karone aru code readble format koribor babe

#parts of OOP
-- Object literal mane hoise kebol object
-- constructor function
-- Prototypes
-- Classes
-- Instence (new, this)


# NIJE PROHIBO LAGIBO
-- Abstraction mane details hide kora
-- Encapsulation
-- Inheritance
-- Polymorphisim

*/

// Object Litreal

const users = {
    name: 'jhon',
    age: 44,
    logIn: true,
    greet: function () {
        console.log(`hello ${this.name}`);
        // this refers to current contex
    }
}
// console.log(users.greet());

// CONSTRUCTOR FUNCTION IN JAVASCRIPT

// ai new keyword tu ai hoise constructor function , aru constructor function or kaam hoise ata objector pora ru bohu instance bonuwa

// const promiseOne = new Promise();
// const date = new Date();

function user(userName, age, isLoggedIn) {
    this.userName = userName;
    this.age = age;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = user("drlov", 22, true);
const userTwo = user("jhon", 44, false);
// jodi ami aidore user bonau tente agee likha kaita overwrite hoi jabo haibabe ami notun instance create koribo lagibo new keyword or joriote
// console.log(userOne);
// console.log(userTwo);

const userThree = new user("rocky", 35, true)
const userFour = new user("sam", 25, false)

// atia duita object boni goise
console.log(userFour);
console.log(userThree);
console.log(userFour.constructor); // nijore ata reference hoi
// new keyword diar loge loge prothome ata empty object create hoi aru ditiote ata constructor function call hoi aru constructor function or kaam hoise jiman bur argument ase haibur di diye aru tritiote this jeyword or joriote jiman bur argument dia ase hokolu bur inject hoi jai aru 4th stepot function execute hoi output di die.

// read instance of method in javascript