// primitive datatypot hodai stack memory use hoi aru non-primitve ba reference type datatypot hodai heap memory use hoi


// stack memoryot hodai original value copy dia hoi , jdi kenebakoi copy valuet change hoi tene original value ake thake

let name = "durlov phukon";
let myName = name;
myName = "rocking star"; // change kebol copyt he hbo
// console.log(name); //original value ai ase
// console.log(myName);

// heap memoryt hodai kebol value atar reference dia hoi, jdi kenebake reference copyt change hoi tente original valuet change hoi jbo

let marks = {
    subName: "maths",
    mark: 88,
}
/*
let secondMark = marks;

console.log(marks);
console.log(secondMark.mark = 99);
console.log(secondMark.subName = "physics");
console.log(marks); //original valuet change hoi gl
*/