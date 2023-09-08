const body = document.getElementById('body');
body.style.backgroundColor = '#212121';
body.style.color = '#fff';

// const list = document.querySelectorAll('p');
// console.log(list);

// list[0].style.backgroundColor = 'coral';
// list[0].style.padding = '20px';

// const newList = Array.from(list); //convert nodeList to array

// newList.map((item) => {
//     item.style.backgroundColor = 'purple';
//     item.style.fontSize = '20px';
// })

// const list = document.getElementsByClassName('list');

// list.map((li) => {
//     li.style.padding = '20px 10px';
//     li.style.border = '1px solid red';
// })


// +++++++++++++++ CREATE A NEW NODE +++++++++++

const main = document.querySelector('.main');
// console.log(main);
// console.log(main.children[1].textContent);
// console.log(main.firstElementChild);
//console.log(main.childNodes); //iyar joriyote ami jiman bur element sob pao, jodi ami line-break diu tente iyak text-node buli kuwa hoi logote protitu element ok ata ata node buli dhora hoi

const list = document.querySelector('.list');
// console.log(list.parentElement);
// console.log(list.nextElementSibling);

const div = document.createElement('div');
div.className = 'DOM';
div.id = Math.floor(Math.random() * 10);
// div.innerText = "Hello welcome!"
// console.log(div);

//MOST importantly .id , .innerHTML, .innerText korlile ee value homuh overwrite kore haikarone setAttribute method use koribo lage ee existing elementot set kore

const addText = document.createTextNode("hello welcome");
div.appendChild(addText);

document.body.appendChild(div);