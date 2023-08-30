// Dates In JavaScript

let myDate = new Date(); //Object

/*
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString()); //Best method to display
console.log(myDate.toLocaleString()); //with time
console.log(typeof myDate);
*/

let DOB = new Date(2001, 0, 1);
let anotherDob = new Date(2000, 1, 10);

// console.log(DOB.toDateString());
// console.log(anotherDob.toDateString());

const myTime = Date.now();
// console.log(myTime);
// console.log(Math.floor(myTime / 1000));

const newDate = new Date('2023-8-30');
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());

const myNewDate = newDate.toLocaleString('default', {
    weekday: 'long',
    day: '2-digit'
})

console.log(myNewDate);