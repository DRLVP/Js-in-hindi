// Problem 1: Remove Duplicates from Sorted Array

const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6];

function sortArr(elem, i, arr) {
    return i === arr.filter(elem);
}

// sortArr();

let userName = [];

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        if (btn.onsubmit) {
            const user = document.querySelector('input');
            userName.push(`${user.value}`);
            window.reload();
        }

    });
})

console.log(userName);