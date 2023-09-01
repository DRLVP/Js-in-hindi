// function javascriptot same code reuse koribole bibohar kora hoi ba ake code bleg bleg datar hoite cholabole bibohar kora hoi

function hello() {
    alert('hello');
}

// hello(); //execute function

function addNum(num1, num2) {
    const result = num1 + num2;
    return result;
    //functionor code return korar pst kunu code run nohoi
    console.log(num1 + num2);
}

let result = addNum(10, 20);
console.log(`your number result is: ${result}`);


// jodi kunu ata functionor parameter dia ase kintu execute korar pst jdi ami argument nidu tente undefined show koribo

function greet(username = 'user') {
    if (username === undefined) {
        alert('please define a name');
    } else {
        alert(`hello ${username}`);
    }
};

// greet();