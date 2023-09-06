// javaScripot loops ok iteration buli kuwa hoi

const users = [{ name: 'drlv', id: 11111 }, { name: 'jhon', id: 22222 }, { name: 'sam', id: 33333 }];

// for (let i = 0; i < users.length; i++) {
//     const element = users[i];
//     console.log(element);
// }

// for (let i = 0; i < 5; i++) {
//     console.log(`outerloop : ${i}`);
//     for (let j = 0; j < 5; j++) {
//         // const element = array[j];
//         //console.log(`innerloop : ${j}, and outer loop ${i}`);
//         console.log(i + '*' + j + ' = ' + i * j);
//     }

// }

const arr = ['thor', 'ironman', 'hulk'];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}

// BREAK AND CONTINUE

// for (let i = 1; i <= 20; i++) {
//     const element = i;
//     if (i === 5) {
//         console.log('deteced 5');
//         // break;
//         continue;
//     }

//     // console.log(element);
// }

// WHILE LOOP AND DO-WHILE LOOP

// let i = 1;
// while (i < users.length) {
//     console.log(users[i]);
//     i += 2; //exit condition
// }

// let i = 0;
// do {
//     console.log(users[i]);
//     i++;
// } while (i < users.length);