// PROTOTYPEL BEHAVIOUR IN JAVASCRIPT

// JAVASCRIPT te ki krarone enedore kam kore aru javascript or mechanisim e kene dhoronere kam kore tak jona 2 khubai proujonio lagile haia Interview perspective or joriote houk ba valdore in-depth javascript ok jonai houk

// javascript te ketia u har namane jetia loi k kunu ata execution or end point null napai goi . javascript e chain wise ot access kori goi thak parents, grand parents etc. Default javascript prototypel behaviour language hoi.

// javascript or joriote ami javascript ot new, this, prototypel inheritance use koribo paru.

// javascript ot pribhag properties and method ai Object hoi . kin2 object or parent asolote null hoi. ru jibur properties ba prototype Object or usorot available ase hai hokolu khini protitu propertier usorot available ase lagile he array houk ba string ai houk karon hokolure grand-parents hoi Object hoi Object or hokolu properties tu child ok tu dia hoi a


function multiply(num) {
    return num * 5;
}
// javascript ot function ata object hoi, function ata i function or dore kam koribo kin2 jodi dorkar hoi ami tak object o loi covert koribo parim 

multiply.power = 2;
// console.log(multiply(5));
// console.log(multiply.power);
// console.log(multiply.prototype);

function user(userName, age) {
    this.userName = userName;
    this.age = age;
}

user.prototype.ageIncrement = function () {
    // this give us current contex
    this.age + 1;
}

user.prototype.printMe = function () {
    console.log(`hello ${this.userName}, your age is ${this.age}`);
}

// ata nije bonuwa additional prototype propertie object ot inject korar pasot tak jetia function ata call kora hoi tatia tak transfer koriboloi new keyword use koribo lagibo

const drlov = new user("drlov", 22);
const rocky = new user("rocky", 25);

// console.log(drlov.printMe());
// console.log(drlov.ageIncrement(22));
// console.log(rocky.printMe());
// console.log(rocky.ageIncrement());

// ++++++++++++++++ NEW KEYWORD OR KAM ++++++++++++++++++

/*
1) new keywordor joriote ata notun object create hoi;
2) tar pasot notun koi bona object tur logot prototype link hoi construction function or joriote.
3) tar pasot constructor function tu call hoi jiman bur argument dia hoi hokolubur notun object tut humuwai die
4) last step ot ata notun object di dia hoi
*/


// +++++++++++ PROTOTYPE EXAMPLE ++++++++++++++

