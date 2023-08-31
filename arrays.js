// ARRAYS IN JAVASCRIPT

// const myArr = [23, 25, 11, 65, 12, 1, "pagol"];
// const superHero = new Array('iron-man', 'spider-man', 'deadpool', 'black-panther', 'hulk', 'mrs.marvel');
//javascriptot array resizeable hoi mane ekbar declare kora arrayt notun jikunu typor data vorabo pari 

// array atar vitorot thoka data access koribor karone ami [] bracketor vitorot indexing number dibo lage

// console.log(myArr); //iyat 11 ahibo
// console.log(superHero);


/* *******************ARRAYS METHOD*************** */
/*
console.log(superHero.toString());
console.log(superHero.includes('iron-man'));
console.log(superHero.indexOf('spider-man'));
console.log(superHero.join());
console.log(superHero.slice(1, 3)); //iyat last value include nohoi
console.log(superHero.splice(1, 3));//iyat last value include hoi aru most importantly ee original arrayt change kore

*/

const marvel = new Array('iron-man', 'spider-man', 'deadpool', 'black-panther', 'hulk', 'mrs.marvel');

const dc = ['superman', 'batman', 'flash'];

// marvel.push(dc);
// console.log(marvel);

// const superHero = marvel.concat(dc); //return a new array
// console.log(superHero);

const superHero = [...marvel, ...dc];
// console.log(superHero);

const num = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12, [13, 14, 15]]]]];

const newNum = num.flat(Infinity); //return new array
// console.log(newNum);


const movie = [{ name: 'thor', collection: 2.5 }, { name: 'iron-man', collection: 125 }];

console.log(movie[0].collection);
console.log(movie[0].name);
