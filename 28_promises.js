// PROMISES IN JAVASCRIPT
//promise ata object hoi
//promises mne hoise jit2 task dia hoi hai2 loga log complete nohoi task queue add hoi thak aru future ot goi complete hbo example hisape, api request, databe request, read file cryptographic operation , network call etc.

//promise ot tinita stage tha k : pending, fullfil aru rejected

//Promise keyword ohar agote javascriptot async kam koribole Que aru bluebird namor duta library use kora hoisil. kin2 ES6 or pastot node.js run time ot ai library kaita include kora hoi

// HOW TO MAKE PROMISES

const promiseOne = new Promise((resolve, reject) => {
    // do an async task

    // setTimeout(function () {
    //     console.log('hello promises');
    // }, 2000);
    // resolve();
    // reject();
});

// promiseOne.then(() => {
//     //.then connected resolve
//     console.log('access resolve task');
// }).catch(() => {
//     //.catch connected reject
//     console.log('access reject task');
// })
const user = {
    name: 'sagar',
    email: 'demo@gmail.com',
    password: 'kjsjdnalks'
}

// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve(user)
//     }, 2000)
// })

// promiseTwo.then((data) => {
//     console.log(data);
// })

// promise chaining hoise jetia ami .then logai return koru tatia ji2 value return kora hoi tatia hai value tu tar pasor .then methodo loi gusi jabo iyat kunu dhoronor variable bonabo nalage
/*
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve(user);
        } else {
            reject('error dim 404')
        }
    }, 2000);
})

promiseFour
    .then((data) => {
        return { name: data.name, mail: data.email };
        //return an array

    })
    .then((name) => {
        console.log(name);

    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        // default behaviour
        console.log('the promise is completed with resolve or reject');
    })
*/

const movie = {
    name: 'spiderman-3',
    production: 'marvel',
    collection: 10
}

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve(movie);
        } else {
            reject('error movie dim 404')
        }
    }, 2000);
});

// async await or ata problem hoise ee directley error handle koribo nuware haikarone ami try & catch block ot likhu 
async function FiveP() {
    try {
        const response = await promiseFive;
        console.log(response);

    } catch (error) {
        console.log(error);
    }

}

// FiveP();

// async function randomUsers() {
//     try {
//         const users = await fetch('https://randomuser.me/api/');
//         const data = await users.json();
//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }
// }

// randomUsers();

//fetch method hodai agote run hbo karon fetch high priority task queue joriyote call stack o loi jai

fetch('https://randomuser.me/api/')
    .then((users) => {
        return users.json();
    })
    .then((user) => {
        //denebole method
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    })
