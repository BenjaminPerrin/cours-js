console.log("cc");



// const message = "Hello";
// if (message === "Hello") {
//     console.log(message.toUpperCase());
// }
// title.textContent = "new"
//ou sinon
//title.innerHTML = "new"

const btn_panier = document.querySelector('.btn-success');
const p_panier = document.getElementById('p_panier');

let count = 5;

console.log(btn_panier);
btn_panier.addEventListener('click', function onClick() {
    count = count +1

    p_panier.textContent =  count

});