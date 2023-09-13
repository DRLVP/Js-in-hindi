// SETTIMEOUT :-  set time oute ata api o call kore

function sum() {
    console.log(5 + 5);
}

// setTimeout(sum, 3000);
/*
const heading = function () {
    document.querySelector('h1').innerHTML = 'setTimeout and setInterval in javascript';

}
const btn = document.querySelector('button').addEventListener('click', function () {
    console.log('btn clicked');
    clearInterval(myHeading);
});
const myHeading = setTimeout(heading, 3000);

*/
const randomNum = function () {
    const num = Math.round(Math.random() * 10);
    const li = document.createElement('li');
    const mainDiv = document.querySelector('.parent');
    li.innerHTML = `${num}`;
    mainDiv.appendChild(li)

}

const startBtn = document.querySelector('.start').addEventListener('click', function () {
    // setInterval(randomNum, 2000);

})

const stopbtn = document.querySelector('.stop').addEventListener('click', function () {
    clearInterval(randomNum);
});

