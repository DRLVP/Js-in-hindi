//... ai operator 2k rest operator aru spread operator buli kuwa hoi . ji2 naki apunar use caseor uporot depend koribo

// pass unlimited argument in function
function shoppingCart(...num) {
    return num;
    //rest operator joriote pass huwa value homuh ata arrayot store hbo
}

// console.log(shoppingCart(101, 200, 11, 124, 43, 123, 131));

// how to pass a object in function parameter

let user = {
    name: 'drlov',
    age: 22,
    email: 'user@gmail.com'
}

function userDetails(anyObj) {
    console.log(`the user name is ${anyObj.name} and he is ${anyObj.age} years old and his email id is ${anyObj.email}`);
}

// userDetails(user);

// how to pass a Array in function parameter

const arr = ['delhi', 'mumbai', 'guwahati'];

function city(arr) {
    console.log(arr);
}
city(arr);