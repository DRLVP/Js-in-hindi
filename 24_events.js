// EVENTS IN JAVASCRIPT

// document.getElementById('metro-station').onclick = () => {
//  //ai2 method optimize nohoi karone ami addEventListenr use koru
//     alert('hello world!');
// }

// document.querySelector('#metro-station').addEventListener('click', (e) => {
//     console.log(e); //best approach
// }, false); //iyat default false ai tha k haikarone false likha nohoi

// // attechEvent()

// event types, timestamp, defaultPrevented, target, toElement, sourceElement, currentTarget, client position, altkey, ctrlkey, shiftkey, keycode

// document.querySelector('#click').addEventListener('click', (e) => {
//     console.log(e);
// }, true)

// +++++++++++++ EVENT PROPOGATION ++++++++++++++

/* event propogationor 2ta contex hoi ata hoise 1:- event bubling and 2:- event captureing // javascripot projectot besibhag default eventor joriote kam hoi jiyu false hoi kin2 ketiaba enekuwa situation ahibo pare jot event captureing koribo logia hbo pare tatia ami true use korim EX:-- */

document.querySelector('#images').addEventListener('click', (e) => {
    // alert('click in ul');
    // e.stopPropagation(); //ee event capturing bondho koribo


    //ai2 functionot jodi ami default value false or thait true kori diu tente prothome ul ot click hbo (click in ul) tar pasot he image khonot click hbo iyak kuwa hoi event capturing

    // ee parent or pora chaildo loi ahe
}, true)

document.querySelector('#click').addEventListener('click', (e) => {
    alert('click in image');
    // e.stopImmediatePropagation(); // ee event bubbling bondho kori dibo


    //ai2 functionot jodi ami image khonot click koru tente prothome (click in image) print hobo tar pasot (click in ul print hbo)image khonot click hbo tar pasot parent ot loi click bublling hoi jabo

    //iyat inside to outside event propogation bar bublling hbo mane chilor pora parent oloi jbo
});

// ++++++++ DEAFULT PREVENTED ++++++=

document.getElementById('google').addEventListener('click', (e) => {
    e.preventDefault(); //ee kam nai kora
})
