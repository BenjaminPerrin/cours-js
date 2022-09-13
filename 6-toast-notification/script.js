console.log("cc");

const btn = document.querySelector('.btn');
const ctn = document.querySelector('.container-notifications');
console.log(btn);

btn.addEventListener('click', function onClick() {
    console.log("cliqué");
    const notif = document.createElement("div");
    const close = document.createElement("div");
    close.textContent = "X"
    close.classList.add("close")

    notif.textContent = "Votre fichier est bien envoyé"
    notif.classList.add("toast")
    notif.appendChild(close);

    ctn.appendChild(notif);

    const closed = document.querySelector('.close');
    close.addEventListener('click', function onClick() {
      notif.remove();
    });
    
    setTimeout(() => {
        notif.remove()
      }, 5000); 
    console.log(notif);
});

