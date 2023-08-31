// function javascriptot same code reuse koribole bibohar kora hoi ba ake code bleg bleg datar hoite cholabole bibohar kora hoi

function hello() {
    alert('hello');
}

// hello(); //execute function

function addNum(num1, num2) {
    // console.log(num1 + num2);
    const result = num1 + num2;
    return result;
    //functionor code return korar pst kunu code run nohoi
}

let result = addNum(10, 20);
console.log(`your number result is: ${result}`);
