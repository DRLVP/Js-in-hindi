// JavaScriptot mainley 2 ta bhagot voguwa hoise. javascripot kenedore data memoryt store hobo ru kenedore data access kora hbo tar uporot bhitti kori 2ta bhagot bhoguwa hoise

// NO 1:- PRIMITIVE DATATYPE

//string, symbol, number, null, boolean , bigInt, undefined;

const name = "drlov"; //string
const num = 100; //number
const isLoggedIn = true; //Boolean
let address; //Undefined
let movie = null; //null

let sym = Symbol('hello'); //symbol
let sym1 = Symbol('hello'); //symbol completely unique lagie value same houk
const bigNum = BigInt(24141412414); //BigInt
// console.log(typeof bigNum);


// NO 2:- REFERENCE DATATYPE(non-primitive datatype);

// Array, Object, Function

const arr = [2, 1, 31, 13, 13]; //Array
const user = { name: 'drlov', age: 22, } //Object
function greet() { alert('hello') } //Function