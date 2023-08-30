// NUMBER IN JAVASCRIPT

const num = 22;

const myAge = new Number(22.473947929283);
// console.log(typeof myAge, myAge);

// console.log(myAge.toString());

// console.log(myAge.toFixed(2)); //Decimal value r pst kaita number show hbo tak fix kora hbo

const myGst = 140.54902;
// console.log(myGst.toPrecision(3)); //ee kebol string he return kore aru logote precise value round off kori die

const myNetWorth = 200000000000;

// console.log(myNetWorth.toLocaleString('en-IN'));

// ================== MATHS =================

// console.log(Math.abs(-5)); //ee kebol negetive value tu he poisitive koribo 
/*
console.log(Math.round(4.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.sqrt(121));
console.log(Math.pow(2, 10));
*/
/*
console.log(Math.random()); // ee kebol random value 0 r pora 1 or vitorot die;
console.log(Math.round(Math.random()));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.floor(Math.random() * 20));
console.log((Math.floor(Math.random() * 20) + 1)); //minimum value 1 ahibor babe +1 use kora hoi
*/

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min) + 1) + 10));

