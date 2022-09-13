console.log("cc");

// const square1 = document.getElementById('first');
// const square2 = document.getElementById('second');
// const title = document.getElementById('title');

// console.log(title);
// title.style.color = 'green'
// title.addEventListener('click', function onClick() {
//     title.style.color = 'green';
// });
// square1.addEventListener('click', function onClick() {
//     square1.style.backgroundColor = 'blue';
// });
// square2.addEventListener('click', function onClick() {
//     square2.style.backgroundColor = 'purple';
// });

// const mot1 = "hello";
// const mot2 = "tout le monde"
// console.log(`${mot1} ${mot2}`);


// const message = "Hello";
// if (message === "Hello") {
//     console.log(message.toUpperCase());
// }
// title.textContent = "new"
//ou sinon
//title.innerHTML = "new"

const btn_succes = document.querySelector('.btn-success');
const switchColor = document.querySelector('.first');
btn_succes.addEventListener('click', function onClick() {
    switchColor.classList.toggle("newFirst")
});