const des = Object.getOwnPropertyDescriptors(Math, "PI");

// console.log(des); 

const user = {
    name: 'jhon',
    age: 40,

    greet: function () {
        console.log('hello world');
    }
}

// console.log(Object.getOwnPropertyNames(user))
// console.log(Object.getOwnPropertyDescriptors(user, "age"));

Object.defineProperty(user, 'age', {
    // writable: false,
    // enumerable: false
})

user.age = 55;
// console.log(Object.getOwnPropertyDescriptors(user, "age"));

// console.log(user);

for (const [key, value] of Object.entries(user)) {
    // jodi iyak itretable koribole hole Object.entries(user) method solabo lagibo

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    // console.log(`${key} : ${value}`);
}

// atia ami object ata itretable
