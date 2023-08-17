// NORMAL FUNCTIONS IN JAVASCRIPT

const body = document.querySelector('body').innerHTML = `<h1>FUNCTIONS IN JAVASCRIPT</h1>`;

// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(`sum of two numbers: ${sum(5, 3)}`);


//THIS FUNCTION CALLED FIRST CLASS FUNCTION

/*
const avgOfTwoNum = function (num1, num2) {
    console.log(`average of two numbers: ${(num1 + num2) / 2}`);
}

avgOfTwoNum(10, 8);
*/

// THIS FUNCTION CALLED ARROW FUNCTION

const remainderOfTwoNum = (num1, num2) => (num1 + num2) % 2;


console.log(remainderOfTwoNum(10, 2));


