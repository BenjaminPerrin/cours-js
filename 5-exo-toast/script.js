console.log("cc");

const btn = document.getElementById('btn');
const resulat = document.getElementById('resulat');
console.log(btn);

btn.addEventListener('click', function onClick() {
    console.log("cliqué");
    const notif = document.createElement("div");
    notif.classList.add("carre")
    resultat.appendChild(notif);
    setTimeout(() => {
        notif.remove()
      }, 1000); 
    console.log(notif);
});