// Mini hoisting in JavaScript

greeting(); //we can call function before initializing

function greeting() {
    console.log("Hello"); // This will be printed first, before the function is executed
}

// greet();  //iyat ami initialize kora agote call koribo nuwaru karon ee ata first-class function hoi

let greet = function () {
    console.log('Hi');  //This will print after initialization of variable 'greeting' and then it's value is assigned to this function
}

const name = 'durlov';