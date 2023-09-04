// IMEDIATELY INVOKEDE FUNCTION EXPRESSION

// bohu homiot javascriptot global scopeor varibale decleationor problem hoi, aru hei pollutuion bur atorabole IIFE bibohar kora hoi

//named IFFE
(function myFunc(city) {
    console.log(`all major city is here: ${city}`);
})(['delhi', 'mumbai', 'punjab']);

// simple IIFE
((username) => {
    console.log(`hello ${username}`);
})('sudurbhai');

