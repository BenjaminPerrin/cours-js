console.log('connecté'); 

//fa-smile-wink

const meh = document.querySelector('.fa-meh-blank');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function onClick() {

    btn.classList.toggle("abonne")
    btn.textContent != "Abonné" ?
       btn.textContent = "Abonné": btn.textContent = "Abonnez-vous"
    // console.log(btn);
});
//ou

// btn.addEventListener('click', function () {
//     // console.log('bouton cliqué');
//     btn.classList.toggle('abonne');
  
//     let content = btn.innerText;
//     console.log(contenu);
  
//     if (content === 'Abonnez-vous') {
//       btn.innerText = 'Abonné';
//     } else {
//       console.log('depuis else');
//       btn.innerText = 'Abonnez-vous';
//     }
//   });

mehC = meh.classList

// meh.addEventListener('click', function onClick() {
//     mehC.toggle("fa-smile-wink");
//     mehC.toggle("happy")
//     console.log(meh);
// });

//ou

meh.addEventListener('click', function onClick() {
    if (mehC.contains("fa-meh-blank")) {
        mehC.remove("fa-meh-blank");
        mehC.add("fa-smile-wink");
    }else if(mehC.contains("fa-smile-wink")) {
        mehC.add("fa-meh-blank");
        mehC.remove("fa-smile-wink");
    }
    mehC.toggle("happy")
    console.log(meh);
});

