// CALL AND THIS IN JAVASCRIPT

// in window ={this = window object}
// in node environment = {}

// EXAMPLE:---

function setUserId(id) {
    this.id = Math.ceil(Math.random(id) * 1000 + 500);
    // console.log('CALL HOI GL');
}

function createUser(id, email, password) {
    setUserId.call(this, id); //iyak ene k korile nahe karon call huwa 2 hoi gol kin2 LIFO rule or karone ee execute hoi atori dile aru  tar execution contex tu atori gol haikarone ami tar reference tu hold kori bor babe CALL keywordor hohai lobo lagibo aru reference or babe ai2 function or contex dibo lagibo
    this.email = email;
    this.password = password;

    // call pass the current execution contex to another function
}

console.log(new createUser(22, "demo@gmail.com", '123abc'));