// HIGHER ORDER LOOP

const marvel = ['ironman', 'thor', 'hulk', 'spiderman'];


// for (const i of marvel) {
//     console.log(i);
// }



// MAPS IN JAVASCRIPT

const country = new Map();
country.set('IN', 'india');
country.set('NZ', 'new-zeeland');
country.set('IR', 'ireland');
country.set('IR', 'ireland');
// map ot duplicate value ba key pairs entry koribo nuwari jdi enter kora hoi tente ee add nohoi
country.set('IR', 'ireland');

// console.log(country);

for (const [key, value] of country) { //de-structure in array
    // console.log(key, ':', value);
}


// const users = {
//     name: 'drlv',
//     id: 11111,
//     age: 22
// }

// for (const [key, value] of users) {
//     console.log(key, ":", value);

// }

// for (const key in users) {
//     console.log(`${key} : ${users[key]}`);
// }

// for (const key in marvel) {
//     console.log(`${marvel[key]}`);
// }

// for (const [key, value] in country) {
//     console.log(key, ':', value);
// }


const users = [{ name: 'drlv', id: 11111 }, { name: 'jhon', id: 22222 }, { name: 'sam', id: 33333 }];

// users.forEach((item, i, arr) => {
//     if (item.id > 22222) {
//         console.log(item.id);
//         console.log(item.name);

//     }
// })