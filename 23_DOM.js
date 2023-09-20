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

// console.log(main);
// console.log(main.children[1].textContent);
// console.log(main.firstElementChild);
//console.log(main.childNodes); //iyar joriyote ami jiman bur element sob pao, jodi ami line-break diu tente iyak text-node buli kuwa hoi logote protitu element ok ata ata node buli dhora hoi
// main.style.display = 'flex';
// main.style.justifyContent = 'center';
// main.style.alignItem = 'center';
// main.style.gap = '20px';

function addLanguageName(lang) {
    const list = document.createElement('li');
    list.innerHTML = `${lang}`
    document.querySelector('.main').appendChild(list);
};
addLanguageName('javaScript'); //ai function tu optimize nohoi karon jetia ai method tu run hbo tatia complete DOM tree structure treverse kori lastoloi jbo.

addLanguageName('python');
addLanguageName('cpp');


// OPTIMIZE METHOD
function addLang(lang) {
    const list = document.createElement('li');
    list.appendChild(document.createTextNode(lang));
    document.querySelector('.main').appendChild(list);
};
addLang('ruby');
addLang('goLang'); //recommend method


// ++++++++++++ EDIT AND REMOVE ELEMENT +++++++++++

const python = document.querySelector('li:nth-child(2)')
// python.innerHTML = 'swift';
const newLi = document.createElement('li');
newLi.textContent = 'swift';
python.replaceWith(newLi);


const js = document.querySelector('li:first-child');
js.outerHTML = '<li>TypeScript</li>'


const goLang = document.querySelector('li:last-child');
goLang.remove();

// newLi.appendChild(document.createTextNode('swift'));

// const list = document.querySelector('.list');
// console.log(list.parentElement);
// console.log(list.nextElementSibling);

// const h1 = document.createElement('h1');
// h1.className = 'DOM';
// h1.id = Math.floor(Math.random() * 10);
// div.innerText = "Hello welcome!"
// console.log(div);

//MOST importantly .id , .innerHTML, .innerText korlile ee value homuh overwrite kore haikarone setAttribute method use koribo lage ee existing elementot set kore


// const addText = document.createTextNode("hello welcome");
// h1.appendChild(addText);
// document.body.appendChild(h1);

/*
const contact = document.createElement('form');

const input = document.createElement('input');
input.setAttribute('type', 'text');
const inputEmail = document.createElement('input');
inputEmail.setAttribute('type', 'email');
const btn = document.createElement('button');
btn.setAttribute('type', 'submit');
btn.innerText = 'submit';
contact.appendChild(input)
contact.appendChild(inputEmail)
contact.appendChild(btn)


contact.style.display = 'flex';
contact.style.flexDirection = 'column';

document.body.appendChild(contact);
*/

