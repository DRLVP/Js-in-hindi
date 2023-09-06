// MAP FILTER AND REDUCE

const users = [{ name: 'drlv', id: 11111 }, { name: 'jhon', id: 22222 }, { name: 'sam', id: 33333 }];

// forEach methodot callback function ot tinita parameter accept hoi prothom hoise item(mane array adalot thoka value homoh), secondot array value homuhpr index number aru 3rd parameter hoise complete array tu. 

const values = users.forEach((item) => {
    // console.log(item);
    if (item.id > 11111) {
        return item.name;
    }
});
//forEach methode aku return nokore 
// console.log(values);


const val = users.filter((item) => item.id > 22222);
//console.log(val);  //ee notun array return kore


let myNum = [2, 4, 21, 5, 1, 2];
// const total = myNum.map((num) => num ** 2); //return new array calculation koribor babe map() method use kore

//chaining jetia kora hoi tetia prothom method execute huwar past direct return hoi najai second method o li pass hob 
const total = myNum
    .map((num) => num + 5)
    .filter((num) => num >= 10);
// console.log(total);

// REDUCE METHOD

// reduce ata bohut intresting method hoi jetia ami reduce method use koru tetia callback function ot 2ta parameter luwa hoi prothom 2 hol accumulator ru 2nd tu hol currentValue. accumulator value ami nije declare koribo paru. aru current value ot array dalor protitu value ata ata koi pass hbo. ru calculation korar pasot jitu result hbo hai2 accumulator loi jabo

const result = myNum.reduce((acc, val) => {
    console.log(`accumulator value: ${acc}`);
    console.log(`current value : ${val}`);
    return acc += val

}, 5);

// console.log(result);

// reduce method e-commerce cart ot use kora hoi