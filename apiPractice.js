const user = {
    id: 1,
    details: {
        name: 'jhon doe',
        email: 'jhon@doe.com',
        password: 12465,
        pic: 'user.png'
    },
    about: 'full-stack developer in google'
}

const card = document.querySelector('.card');
const img = document.createElement('img'),
    h1 = document.createElement('h1'),
    p = document.createElement("P"),
    btn = document.createElement('button');
img.src = `${user.details.pic}`;
h1.innerText = `${user.details.name}`;
p.innerText = `${user.about}`;
btn.innerText = 'contact me';
card.appendChild(img);
card.appendChild(h1);
card.appendChild(p);
card.appendChild(btn);